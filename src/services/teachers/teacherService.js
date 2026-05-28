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

const demoAssignments = [
  {
    id: 'assignment-1',
    teacherId: 'demo-teacher',
    teacherName: 'Demo Teacher',
    classId: 'class-1',
    sectionId: 'section-a',
    wing: 'Primary',
  },
];

export const teacherService = {
  async getAssignments(filters = {}) {
    if (!isFirebaseConfigured) {
      return demoAssignments.filter(
        item => !filters.teacherId || item.teacherId === filters.teacherId,
      );
    }

    const constraints = Object.entries(filters)
      .filter(([, value]) => Boolean(value))
      .map(([key, value]) => where(key, '==', value));

    const snapshot = await getDocs(
      query(
        collection(firestore, COLLECTIONS.TEACHER_ASSIGNMENTS),
        ...constraints,
      ),
    );

    return snapshot.docs.map(item => ({id: item.id, ...item.data()}));
  },

  async assignTeacher(payload) {
    if (!isFirebaseConfigured) {
      return {id: `assignment-${Date.now()}`, ...payload};
    }

    const docRef = await addDoc(
      collection(firestore, COLLECTIONS.TEACHER_ASSIGNMENTS),
      {
        ...payload,
        createdAt: serverTimestamp(),
      },
    );

    return {id: docRef.id, ...payload};
  },
};

export default teacherService;
