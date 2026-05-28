import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import {COLLECTIONS} from '../../config/constants';
import {firestore, isFirebaseConfigured} from '../../config/firebase';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS} from '../dataconnect/operations';

const demoBranches = [
  {
    id: 'demo-branch',
    name: 'NSRIT Main Campus',
    code: 'NSRIT-MAIN',
    city: 'Visakhapatnam',
  },
];

export const branchService = {
  async getBranches() {
    if (!isFirebaseConfigured) {
      return demoBranches;
    }

    const snapshot = await getDocs(
      query(collection(firestore, COLLECTIONS.BRANCHES), orderBy('name')),
    );

    return snapshot.docs.map(item => ({id: item.id, ...item.data()}));
  },

  async createBranch(payload) {
    try {
      const response = await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.CREATE_BRANCH, {
        name: payload.name,
        branchCode: payload.branchCode || payload.code,
        address: payload.address || '',
        city: payload.city || '',
      });
      return {id: response.branch_insert, ...payload, isActive: true};
    } catch (error) {
      // Keep the app usable while Data Connect auth/deployment is being configured.
    }

    if (!isFirebaseConfigured) {
      return {id: `demo-branch-${Date.now()}`, ...payload};
    }

    const docRef = await addDoc(collection(firestore, COLLECTIONS.BRANCHES), {
      ...payload,
      createdAt: serverTimestamp(),
      isActive: true,
    });

    return {id: docRef.id, ...payload, isActive: true};
  },
};

export default branchService;
