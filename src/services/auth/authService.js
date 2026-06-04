import {
  getAuth,
  signInWithPhoneNumber,
  signInWithCredential,
  signOut,
  PhoneAuthProvider,
  getIdToken,
} from '@react-native-firebase/auth';
import {STORAGE_KEYS} from '../../config/constants';
import {authConfig} from '../../config/env';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';
import {getJSON, removeStorageKeys, setJSON, storage} from '../storage/mmkvStorage';
import {errorResponse, successResponse} from '../../utils/firebaseResponse';
import {formatE164PhoneNumber} from '../../utils/phone';
import {USER_ROLES} from '../../config/constants';
import parentService from '../parents/parentService';

const buildFullPhoneNumber = ({countryCode = '+91', phoneNumber}) => {
  return formatE164PhoneNumber({countryCode, phoneNumber});
};

const normalizeProfile = (profile, fallback = {}) => {
  const user = profile || {};

  return {
    id: user.id,
    uid: user.firebaseUID,
    firebaseUID: user.firebaseUID,
    fullName: user.fullName,
    name: user.fullName,
    countryCode: user.countryCode || fallback.countryCode,
    phoneNumber: user.phoneNumber || fallback.phoneNumber,
    role: user.role,
    branchId: user.branchId || null,
    wingId: user.wingId || null,
    sectionId: user.sectionId || null,
    parentId: user.parentId || fallback.parentId || null,
    isActive: user.isActive ?? true,
  };
};

const fetchUserProfile = async firebaseUID => {
  const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_CURRENT_USER, {
    firebaseUID,
  });

  return response.users?.[0] || null;
};

const fetchUserProfileByPhone = async phoneNumber => {
  const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_USER_BY_PHONE, {
    phoneNumber,
  });

  return response.users?.[0] || null;
};

const claimUserProfile = async id => {
  await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.CLAIM_USER_FIREBASE_UID, {
    id,
  });
};

const hydrateRoleProfile = async profile => {
  if (!profile) {
    return null;
  }

  if (profile.role !== USER_ROLES.PARENT) {
    return profile;
  }

  const parent = await parentService.getParentByUser(profile.id);
  return {
    ...profile,
    parentId: parent?.id || null,
  };
};

export const authService = {
  async sendOtp({countryCode, phoneNumber}) {
    try {
      const fullPhoneNumber = buildFullPhoneNumber({countryCode, phoneNumber});
      const authInstance = getAuth();

      authInstance.settings.appVerificationDisabledForTesting =
        authConfig.disablePhoneAuthAppVerificationForTesting;
      
      const confirmation = await signInWithPhoneNumber(authInstance, fullPhoneNumber);
      storage.set(STORAGE_KEYS.OTP_VERIFICATION_ID, confirmation.verificationId);

      return successResponse(
        {
          verificationId: confirmation.verificationId,
          fullPhoneNumber,
        },
        'OTP sent successfully',
      );
    } catch (error) {
      return errorResponse(error, 'Unable to send OTP');
    }
  },

  async verifyOtp({verificationId, otp, countryCode, phoneNumber}) {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const authInstance = getAuth();
      const result = await signInWithCredential(authInstance, credential);
      const credentialUser = result.user;

      const token = await getIdToken(credentialUser);
      let profile = await hydrateRoleProfile(await fetchUserProfile(credentialUser.uid));
      const fullPhoneNumber =
        credentialUser.phoneNumber || buildFullPhoneNumber({countryCode, phoneNumber});

      if (!profile) {
        const pendingProfile = await fetchUserProfileByPhone(fullPhoneNumber);

        if (pendingProfile) {
          await claimUserProfile(pendingProfile.id);
          profile = await hydrateRoleProfile(await fetchUserProfile(credentialUser.uid));
        }
      }

      if (!profile) {
        // Auto-create the user as a MAIN_ADMIN for testing.
        console.log('No profile found, auto-creating MAIN_ADMIN profile...');
        await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.CREATE_USER, {
          firebaseUID: credentialUser.uid,
          fullName: 'Main Admin',
          countryCode: countryCode,
          phoneNumber: fullPhoneNumber,
          role: USER_ROLES.MAIN_ADMIN,
        });
        
        // Fetch the newly created profile
        profile = await hydrateRoleProfile(await fetchUserProfile(credentialUser.uid));
        if (!profile) {
          throw new Error('Active user profile not found and auto-creation failed');
        }
      }

      const user = normalizeProfile(profile, {
        countryCode,
        phoneNumber: fullPhoneNumber,
      });

      setJSON(STORAGE_KEYS.AUTH_USER, user);
      storage.set(STORAGE_KEYS.AUTH_TOKEN, token);

      return successResponse({user, token}, 'Login successful');
    } catch (error) {
      return errorResponse(error, 'Unable to verify OTP');
    }
  },

  async logout() {
    const authInstance = getAuth();
    await signOut(authInstance);
    removeStorageKeys([
      STORAGE_KEYS.AUTH_TOKEN,
      STORAGE_KEYS.AUTH_USER,
      STORAGE_KEYS.OTP_VERIFICATION_ID,
    ]);
  },

  async getStoredSession() {
    const authInstance = getAuth();
    const currentUser = authInstance.currentUser;

    if (currentUser) {
      const token = await getIdToken(currentUser);
      const profile = await hydrateRoleProfile(await fetchUserProfile(currentUser.uid));

      if (profile) {
        const user = normalizeProfile(profile, {
          phoneNumber: currentUser.phoneNumber,
        });
        setJSON(STORAGE_KEYS.AUTH_USER, user);
        storage.set(STORAGE_KEYS.AUTH_TOKEN, token);
        return {token, user};
      }
    }

    const token = storage.getString(STORAGE_KEYS.AUTH_TOKEN);
    const user = getJSON(STORAGE_KEYS.AUTH_USER);
    return token && user ? {token, user} : null;
  },
};

export default authService;
