import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import {COLLECTIONS, FEE_STATUS, USER_ROLES} from '../../config/constants';
import {firestore, isFirebaseConfigured} from '../../config/firebase';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';

const demoFeeRecords = [
  {
    id: 'fee-1',
    studentId: 'student-1',
    studentName: 'Aarav Kumar',
    className: 'Class 1',
    sectionName: 'A',
    wing: 'Primary',
    branchId: 'demo-branch',
    parentId: 'demo-parent',
    totalFee: 52000,
    paidAmount: 52000,
    dueAmount: 0,
    dueDate: '2026-06-10',
    status: FEE_STATUS.PAID,
  },
  {
    id: 'fee-2',
    studentId: 'student-2',
    studentName: 'Meera Rao',
    className: 'Class 1',
    sectionName: 'A',
    wing: 'Primary',
    branchId: 'demo-branch',
    parentId: 'demo-parent',
    totalFee: 52000,
    paidAmount: 30000,
    dueAmount: 22000,
    dueDate: '2026-06-15',
    status: FEE_STATUS.PARTIAL,
  },
  {
    id: 'fee-3',
    studentId: 'student-3',
    studentName: 'Kavya Reddy',
    className: 'Class 2',
    sectionName: 'B',
    wing: 'Primary',
    branchId: 'demo-branch',
    parentId: 'demo-parent-2',
    totalFee: 56000,
    paidAmount: 0,
    dueAmount: 56000,
    dueDate: '2026-05-20',
    status: FEE_STATUS.OVERDUE,
  },
];

const demoPayments = [
  {
    id: 'payment-1',
    studentId: 'student-1',
    studentName: 'Aarav Kumar',
    amount: 26000,
    mode: 'Cash',
    date: '2026-05-04',
    receiptNo: 'NSRIT-001',
  },
  {
    id: 'payment-2',
    studentId: 'student-2',
    studentName: 'Meera Rao',
    amount: 30000,
    mode: 'UPI',
    date: '2026-05-08',
    receiptNo: 'NSRIT-002',
  },
];

const getScopedRecords = (records, access = {}) => {
  const {role, branchId, wing, sectionName, parentId} = access;

  if (role === USER_ROLES.MAIN_ADMIN || role === USER_ROLES.ACCOUNTANT) {
    return records;
  }

  if (role === USER_ROLES.PARENT) {
    return records.filter(
      item => item.parentId === parentId || item.parentId === 'demo-parent',
    );
  }

  if (role === USER_ROLES.TEACHER) {
    return records.filter(item => item.sectionName === (sectionName || 'A'));
  }

  if (role === USER_ROLES.COORDINATOR) {
    return records.filter(item => item.wing === (wing || 'Primary'));
  }

  return records.filter(item => !branchId || item.branchId === branchId);
};

export const feeService = {
  async getFeeRecords(access = {}) {
    if (access.studentId) {
      try {
        const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_FEE_DETAILS, {
          studentId: access.studentId,
        });
        return response.studentFees || [];
      } catch (error) {
        // Fall through to demo data.
      }
    }

    if (!isFirebaseConfigured) {
      return getScopedRecords(demoFeeRecords, access);
    }

    const constraints = access.branchId
      ? [where('branchId', '==', access.branchId)]
      : [];
    const snapshot = await getDocs(
      query(collection(firestore, COLLECTIONS.FEES), ...constraints),
    );
    return snapshot.docs.map(item => ({id: item.id, ...item.data()}));
  },

  async getPaymentHistory(access = {}) {
    if (access.studentId) {
      try {
        const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_FEE_DETAILS, {
          studentId: access.studentId,
        });
        return response.payments || [];
      } catch (error) {
        // Fall through to demo data.
      }
    }

    if (!isFirebaseConfigured) {
      const scopedStudentIds = getScopedRecords(demoFeeRecords, access).map(
        item => item.studentId,
      );
      return demoPayments.filter(item =>
        scopedStudentIds.includes(item.studentId),
      );
    }

    const snapshot = await getDocs(
      query(collection(firestore, COLLECTIONS.PAYMENTS)),
    );
    return snapshot.docs.map(item => ({id: item.id, ...item.data()}));
  },

  async uploadOfflinePayment(payload) {
    try {
      const response = await dataConnectClient.mutate(
        DATA_CONNECT_MUTATIONS.UPLOAD_FEE_PAYMENT,
        payload,
      );
      return {id: response.payment_insert, ...payload};
    } catch (error) {
      // Fall through to local demo behavior while connector auth is being configured.
    }

    const payment = {
      id: `payment-${Date.now()}`,
      mode: 'Cash',
      date: new Date().toISOString().slice(0, 10),
      ...payload,
    };

    if (!isFirebaseConfigured) {
      return payment;
    }

    const docRef = await addDoc(collection(firestore, COLLECTIONS.PAYMENTS), {
      ...payment,
      createdAt: serverTimestamp(),
    });

    return {id: docRef.id, ...payment};
  },

  getFeeSummary(records) {
    const totalFee = records.reduce((sum, item) => sum + item.totalFee, 0);
    const paidAmount = records.reduce((sum, item) => sum + item.paidAmount, 0);
    const dueAmount = records.reduce((sum, item) => sum + item.dueAmount, 0);

    return {
      totalFee,
      paidAmount,
      dueAmount,
      paidStudents: records.filter(item => item.status === FEE_STATUS.PAID)
        .length,
      dueStudents: records.filter(item => item.dueAmount > 0).length,
      collectionRate: totalFee ? paidAmount / totalFee : 0,
    };
  },
};

export default feeService;
