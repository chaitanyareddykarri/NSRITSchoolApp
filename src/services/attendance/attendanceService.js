import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  doc,
  where,
} from 'firebase/firestore';
import {
  ATTENDANCE_STATUS,
  COLLECTIONS,
  USER_ROLES,
} from '../../config/constants';
import {firestore, isFirebaseConfigured} from '../../config/firebase';
import {toISODate} from '../../utils/helpers/dateHelpers';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';

const demoAttendance = [
  {
    id: 'attendance-1',
    classId: 'class-1',
    sectionId: 'section-a',
    date: toISODate(Date.now() - 24 * 60 * 60 * 1000),
    submittedBy: 'demo-teacher',
    locked: true,
    records: [
      {
        studentId: 'student-1',
        studentName: 'Aarav Kumar',
        status: ATTENDANCE_STATUS.PRESENT,
      },
      {
        studentId: 'student-2',
        studentName: 'Meera Rao',
        status: ATTENDANCE_STATUS.ABSENT,
      },
    ],
  },
];

export const attendanceService = {
  async getAttendance(filters = {}) {
    if (filters.studentId && filters.fromDate && filters.toDate) {
      try {
        const response = await dataConnectClient.query(
          DATA_CONNECT_QUERIES.GET_ATTENDANCE_BY_MONTH,
          filters,
        );
        return response.attendances || [];
      } catch (error) {
        // Fall through to local demo/Firestore data.
      }
    }

    if (filters.sectionId && filters.attendanceDate) {
      try {
        const response = await dataConnectClient.query(
          DATA_CONNECT_QUERIES.GET_ATTENDANCE_BY_SECTION,
          filters,
        );
        return response.attendances || [];
      } catch (error) {
        // Fall through to local demo/Firestore data.
      }
    }

    if (!isFirebaseConfigured) {
      return demoAttendance.filter(item =>
        Object.entries(filters).every(
          ([, value]) => !value || Object.values(item).includes(value),
        ),
      );
    }

    const constraints = Object.entries(filters)
      .filter(([, value]) => Boolean(value))
      .map(([key, value]) => where(key, '==', value));

    const snapshot = await getDocs(
      query(collection(firestore, COLLECTIONS.ATTENDANCE), ...constraints),
    );
    return snapshot.docs.map(item => ({id: item.id, ...item.data()}));
  },

  async markAttendance(payload) {
    if (payload.studentId && payload.academicClassId && payload.markedById) {
      try {
        const response = await dataConnectClient.mutate(
          DATA_CONNECT_MUTATIONS.CREATE_ATTENDANCE,
          payload,
        );
        return {id: response.attendance_insert, ...payload};
      } catch (error) {
        // Fall through to local demo/Firestore data.
      }
    }

    const existing = await this.getAttendance({
      classId: payload.classId,
      sectionId: payload.sectionId,
      date: payload.date,
    });

    if (existing.length) {
      throw new Error(
        'Attendance is already submitted for this class and date',
      );
    }

    const attendancePayload = {
      ...payload,
      locked: true,
      createdAt: new Date().toISOString(),
    };

    if (!isFirebaseConfigured) {
      return {id: `attendance-${Date.now()}`, ...attendancePayload};
    }

    const docRef = await addDoc(collection(firestore, COLLECTIONS.ATTENDANCE), {
      ...attendancePayload,
      createdAt: serverTimestamp(),
    });

    return {id: docRef.id, ...attendancePayload};
  },

  async correctAttendance({attendanceId, records, actorRole}) {
    if (actorRole !== USER_ROLES.COORDINATOR) {
      throw new Error('Only coordinators can correct submitted attendance');
    }

    if (attendanceId && records?.length === 1) {
      try {
        const response = await dataConnectClient.mutate(
          DATA_CONNECT_MUTATIONS.UPDATE_ATTENDANCE,
          {
            id: attendanceId,
            status: records[0].status,
            editedById: records[0].editedById,
            remarks: records[0].remarks,
          },
        );
        return {id: response.attendance_update, ...records[0]};
      } catch (error) {
        // Fall through to local demo/Firestore data.
      }
    }

    if (!isFirebaseConfigured) {
      return {id: attendanceId, records, correctedAt: new Date().toISOString()};
    }

    await updateDoc(doc(firestore, COLLECTIONS.ATTENDANCE, attendanceId), {
      records,
      correctedAt: serverTimestamp(),
    });

    return {id: attendanceId, records};
  },
};

export default attendanceService;
