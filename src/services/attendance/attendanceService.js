import {USER_ROLES} from '../../config/constants';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';

export const attendanceService = {
  async getAttendance(filters = {}) {
    if (filters.studentId && filters.fromDate && filters.toDate) {
      const response = await dataConnectClient.query(
        DATA_CONNECT_QUERIES.GET_ATTENDANCE_BY_MONTH,
        filters,
      );
      return response.attendances || [];
    }

    if (filters.sectionId && filters.attendanceDate) {
      const response = await dataConnectClient.query(
        DATA_CONNECT_QUERIES.GET_ATTENDANCE_BY_SECTION,
        filters,
      );
      return response.attendances || [];
    }

    return [];
  },

  async markAttendance(payload, scope) {
    if (scope?.role === USER_ROLES.TEACHER && payload.sectionId !== scope.sectionId) {
      throw new Error('Teachers can mark attendance only for their assigned section.');
    }

    const response = await dataConnectClient.mutate(
      DATA_CONNECT_MUTATIONS.CREATE_ATTENDANCE,
      payload,
    );
    return {id: response.attendance_insert, ...payload};
  },

  async correctAttendance({attendanceId, records, actorRole, scope}) {
    if (actorRole !== USER_ROLES.COORDINATOR) {
      throw new Error('Only coordinators can correct submitted attendance');
    }

    if (scope?.wingId && records?.some(record => record.wingId && record.wingId !== scope.wingId)) {
      throw new Error('Coordinators can edit attendance only inside their assigned wing.');
    }

    if (!records?.length) {
      throw new Error('No attendance records selected for correction');
    }

    const [record] = records;
    const response = await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.UPDATE_ATTENDANCE, {
      id: attendanceId,
      status: record.status,
      editedById: record.editedById,
      remarks: record.remarks,
    });

    return {id: response.attendance_update, ...record};
  },
};

export default attendanceService;
