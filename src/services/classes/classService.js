import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import {COLLECTIONS} from '../../config/constants';
import {firestore, isFirebaseConfigured} from '../../config/firebase';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS} from '../dataconnect/operations';

const demoClasses = [
  {id: 'class-1', name: 'Class 1', branchId: 'demo-branch', wing: 'Primary'},
  {id: 'class-2', name: 'Class 2', branchId: 'demo-branch', wing: 'Primary'},
];

export const classService = {
  async getClasses(branchId) {
    if (!isFirebaseConfigured) {
      return demoClasses.filter(
        item => !branchId || item.branchId === branchId,
      );
    }

    const constraints = branchId ? [where('branchId', '==', branchId)] : [];
    const snapshot = await getDocs(
      query(collection(firestore, COLLECTIONS.CLASSES), ...constraints),
    );

    return snapshot.docs.map(item => ({id: item.id, ...item.data()}));
  },

  async createClass(payload) {
    try {
      const response = await dataConnectClient.mutate(
        DATA_CONNECT_MUTATIONS.CREATE_CLASS,
        payload,
      );
      return {id: response.academicClass_insert, ...payload};
    } catch (error) {
      // Keep the app usable while Data Connect auth/deployment is being configured.
    }

    if (!isFirebaseConfigured) {
      return {id: `class-${Date.now()}`, ...payload};
    }

    const docRef = await addDoc(collection(firestore, COLLECTIONS.CLASSES), {
      ...payload,
      createdAt: serverTimestamp(),
    });

    return {id: docRef.id, ...payload};
  },

  async createSection(payload) {
    try {
      const response = await dataConnectClient.mutate(
        DATA_CONNECT_MUTATIONS.CREATE_SECTION,
        payload,
      );
      return {id: response.section_insert, ...payload};
    } catch (error) {
      // Keep the app usable while Data Connect auth/deployment is being configured.
    }

    if (!isFirebaseConfigured) {
      return {id: `section-${Date.now()}`, ...payload};
    }

    const docRef = await addDoc(collection(firestore, COLLECTIONS.SECTIONS), {
      ...payload,
      createdAt: serverTimestamp(),
    });

    return {id: docRef.id, ...payload};
  },
};

export default classService;
