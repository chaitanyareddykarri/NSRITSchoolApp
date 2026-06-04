import {PREDEFINED_CLASSES} from '../../config/academic';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';

export const classService = {
  getPredefinedClasses() {
    return PREDEFINED_CLASSES;
  },

  async getClassesByWing(wingId) {
    if (!wingId) {
      return [];
    }

    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_CLASSES_BY_WING, {
      wingId,
    });

    return response.academicClasses || [];
  },

  async getClasses() {
    return PREDEFINED_CLASSES;
  },

  async createClass() {
    throw new Error('Classes are predefined. Create sections under an existing class instead.');
  },

  async createSection(payload) {
    const response = await dataConnectClient.mutate(
      DATA_CONNECT_MUTATIONS.CREATE_SECTION,
      payload,
    );
    return {id: response.section_insert, ...payload, isActive: true};
  },
};

export default classService;
