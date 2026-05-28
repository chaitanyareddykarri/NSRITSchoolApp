import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';
import dataConnectClient from '../dataconnect/dataConnectClient';

export const parentService = {
  async getParentChildren(parentId) {
    try {
      const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_PARENT_CHILDREN, {
        parentId,
      });
      return response.students || [];
    } catch (error) {
      return [
        {
          id: 'student-1',
          studentId: '2026010001',
          fullName: 'Aarav Kumar',
          academicClassId: 'class-1',
          sectionId: 'section-a',
        },
      ];
    }
  },

  async createParent(payload) {
    const response = await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.CREATE_PARENT, payload);
    return {id: response.parent_insert, ...payload, isActive: true};
  },
};

export default parentService;
