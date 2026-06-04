import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';

export const sectionService = {
  async getSectionsByClass(academicClassId) {
    if (!academicClassId) {
      return [];
    }

    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_SECTIONS_BY_CLASS, {
      academicClassId,
    });
    return response.sections || [];
  },

  async createSection(payload, scope) {
    if (scope?.role === 'COORDINATOR' && payload.wingId !== scope.wingId) {
      throw new Error('Coordinators can create sections only inside their assigned wing.');
    }

    const response = await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.CREATE_SECTION, payload);
    return {id: response.section_insert, ...payload, isActive: true};
  },

  async removeSection(sectionId) {
    const response = await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.REMOVE_SECTION, {
      id: sectionId,
    });
    return {id: response.section_update, isActive: false};
  },
};

export default sectionService;
