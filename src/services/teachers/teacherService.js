import {USER_ROLES} from '../../config/constants';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';

export const teacherService = {
  async getAssignments(filters = {}) {
    if (!filters.teacherId) {
      return [];
    }

    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_TEACHER_ASSIGNMENTS, {
      teacherId: filters.teacherId,
    });
    return response.teacherAssignments || [];
  },

  async assignTeacher(payload, scope) {
    if (scope?.role === USER_ROLES.COORDINATOR && payload.wingId !== scope.wingId) {
      throw new Error('Coordinators can assign teachers only inside their assigned wing.');
    }

    const response = await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.ASSIGN_TEACHER, {
      ...payload,
      isClassTeacher: Boolean(payload.isClassTeacher),
    });

    return {id: response.teacherAssignment_insert, ...payload, isActive: true};
  },
};

export default teacherService;
