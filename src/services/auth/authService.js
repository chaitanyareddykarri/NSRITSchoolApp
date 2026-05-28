import auth from '@react-native-firebase/auth';
import {DEMO_ROLE_PHONE_SUFFIX, STORAGE_KEYS, USER_ROLES} from '../../config/constants';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_QUERIES} from '../dataconnect/operations';
import {getJSON, removeStorageKeys, setJSON, storage} from '../storage/mmkvStorage';

const buildFullPhoneNumber = ({countryCode = '+91', phoneNumber}) => {
  const code = String(countryCode).startsWith('+') ? countryCode : `+${countryCode}`;
  const digits = String(phoneNumber || '').replace(/\D/g, '');

  return `${code}${digits}`;
};

const getDemoRoleFromPhone = phoneNumber => {
  const digits = String(phoneNumber || '').replace(/\D/g, '');
  const suffix = digits.slice(-4);
  return DEMO_ROLE_PHONE_SUFFIX[suffix] || USER_ROLES.PARENT;
};

const isDemoPhoneNumber = phoneNumber => {
  const digits = String(phoneNumber || '').replace(/\D/g, '');
  return Boolean(DEMO_ROLE_PHONE_SUFFIX[digits.slice(-4)]);
};

const buildDemoUser = ({countryCode, phoneNumber, firebaseUID}) => {
  const role = getDemoRoleFromPhone(phoneNumber);

  return {
    id: `demo-${role.toLowerCase()}`,
    uid: firebaseUID || `demo-${role.toLowerCase()}`,
    firebaseUID: firebaseUID || `demo-${role.toLowerCase()}`,
    fullName: role
      .split('_')
      .map(value => value.charAt(0) + value.slice(1).toLowerCase())
      .join(' '),
    name: role,
    countryCode,
    phoneNumber,
    role,
    branchId: role === USER_ROLES.MAIN_ADMIN ? null : 'demo-branch',
    wingId: role === USER_ROLES.COORDINATOR ? 'demo-wing' : null,
    isActive: true,
  };
};

const normalizeProfile = (profile, fallback = {}) => {
  const user = profile || {};

  return {
    id: user.id || fallback.firebaseUID,
    uid: user.firebaseUID || fallback.firebaseUID,
    firebaseUID: user.firebaseUID || fallback.firebaseUID,
    fullName: user.fullName || fallback.fullName || 'NSRIT User',
    name: user.fullName || fallback.fullName || 'NSRIT User',
    countryCode: user.countryCode || fallback.countryCode,
    phoneNumber: user.phoneNumber || fallback.phoneNumber,
    role: user.role || fallback.role || USER_ROLES.PARENT,
    branchId: user.branchId || fallback.branchId || null,
    wingId: user.wingId || fallback.wingId || null,
    isActive: user.isActive ?? true,
  };
};

const fetchUserProfile = async firebaseUID => {
  const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_CURRENT_USER, {
    firebaseUID,
  });

  return response.users?.[0] || null;
};

export const authService = {
  async sendOtp({countryCode, phoneNumber}) {
    const fullPhoneNumber = buildFullPhoneNumber({countryCode, phoneNumber});

    if (__DEV__ && isDemoPhoneNumber(phoneNumber)) {
      const verificationId = `demo-verification-${Date.now()}`;
      storage.set(STORAGE_KEYS.OTP_VERIFICATION_ID, verificationId);
      return {verificationId, fullPhoneNumber};
    }

    const confirmation = await auth().signInWithPhoneNumber(fullPhoneNumber);
    storage.set(STORAGE_KEYS.OTP_VERIFICATION_ID, confirmation.verificationId);

    return {
      verificationId: confirmation.verificationId,
      fullPhoneNumber,
    };
  },

  async verifyOtp({verificationId, otp, countryCode, phoneNumber}) {
    let credentialUser = null;

    if (__DEV__ && String(verificationId || '').startsWith('demo-verification')) {
      if (otp !== '123456') {
        throw new Error('Invalid demo OTP');
      }
      credentialUser = {
        uid: `demo-${getDemoRoleFromPhone(phoneNumber).toLowerCase()}`,
        phoneNumber: buildFullPhoneNumber({countryCode, phoneNumber}),
        getIdToken: async () => `demo-token-${Date.now()}`,
      };
    } else {
      const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
      const result = await auth().signInWithCredential(credential);
      credentialUser = result.user;
    }

    const token = await credentialUser.getIdToken();
    const fallback = buildDemoUser({
      countryCode,
      phoneNumber: credentialUser.phoneNumber || buildFullPhoneNumber({countryCode, phoneNumber}),
      firebaseUID: credentialUser.uid,
    });

    let profile = null;
    try {
      profile = await fetchUserProfile(credentialUser.uid);
    } catch (error) {
      if (!__DEV__) {
        throw error;
      }
    }

    const user = normalizeProfile(profile, fallback);

    setJSON(STORAGE_KEYS.AUTH_USER, user);
    storage.set(STORAGE_KEYS.AUTH_TOKEN, token);

    return {user, token};
  },

  async logout() {
    await auth().signOut();
    removeStorageKeys([
      STORAGE_KEYS.AUTH_TOKEN,
      STORAGE_KEYS.AUTH_USER,
      STORAGE_KEYS.OTP_VERIFICATION_ID,
    ]);
  },

  async getStoredSession() {
    const token = storage.getString(STORAGE_KEYS.AUTH_TOKEN);
    const user = getJSON(STORAGE_KEYS.AUTH_USER);

    return token && user ? {token, user} : null;
  },
};

export default authService;
