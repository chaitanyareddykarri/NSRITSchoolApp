import {FEE_STATUS, USER_ROLES} from '../../config/constants';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';

const normalizeStudentFee = item => ({
  ...item,
  totalFee: item.totalFee || 0,
  paidAmount: item.paidAmount || 0,
  dueAmount: item.remainingAmount ?? item.dueAmount ?? 0,
});

export const feeService = {
  async getFeeRecords(access = {}) {
    if (access.studentId) {
      const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_FEE_DETAILS, {
        studentId: access.studentId,
      });
      return (response.studentFees || []).map(normalizeStudentFee);
    }

    if (!access.branchId && access.role !== USER_ROLES.MAIN_ADMIN) {
      return [];
    }

    const query = access.branchId
      ? DATA_CONNECT_QUERIES.GET_FEE_RECORDS_BY_BRANCH
      : DATA_CONNECT_QUERIES.GET_ALL_FEE_RECORDS;
    const variables = access.branchId ? {branchId: access.branchId} : {limit: 1000, offset: 0};
    const response = await dataConnectClient.query(query, variables);

    return (response.studentFees || []).map(normalizeStudentFee);
  },

  async getPaymentHistory(access = {}) {
    if (!access.studentId) {
      return [];
    }

    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_FEE_DETAILS, {
      studentId: access.studentId,
    });
    return response.payments || [];
  },

  async getDueStudents(access = {}) {
    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_DUE_STUDENTS, {
      branchId: access.branchId,
    });
    return (response.studentFees || []).map(normalizeStudentFee);
  },

  async getPaidStudents(access = {}) {
    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_PAID_STUDENTS, {
      branchId: access.branchId,
    });
    return (response.studentFees || []).map(normalizeStudentFee);
  },

  async uploadOfflinePayment(payload, scope) {
    if (scope?.role !== USER_ROLES.ACCOUNTANT) {
      throw new Error('Only accountants can upload offline fee payments.');
    }

    const response = await dataConnectClient.mutate(
      DATA_CONNECT_MUTATIONS.UPLOAD_FEE_PAYMENT,
      {
        ...payload,
        paymentMode: payload.paymentMode || 'CASH',
        uploadedById: scope.userId,
      },
    );
    return {id: response.payment_insert, ...payload};
  },

  getFeeSummary(records) {
    const normalizedRecords = records.map(normalizeStudentFee);
    const totalFee = normalizedRecords.reduce((sum, item) => sum + item.totalFee, 0);
    const paidAmount = normalizedRecords.reduce((sum, item) => sum + item.paidAmount, 0);
    const dueAmount = normalizedRecords.reduce((sum, item) => sum + item.dueAmount, 0);

    return {
      totalFee,
      paidAmount,
      dueAmount,
      paidStudents: normalizedRecords.filter(item => item.status === FEE_STATUS.PAID).length,
      dueStudents: normalizedRecords.filter(item => item.dueAmount > 0).length,
      collectionRate: totalFee ? paidAmount / totalFee : 0,
    };
  },
};

export default feeService;
