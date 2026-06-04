import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';
import dataConnectClient from '../dataconnect/dataConnectClient';

export const parentService = {
  async getParentChildren(parentId) {
    if (!parentId) {
      return [];
    }

    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_PARENT_CHILDREN, {
      parentId,
    });
    return response.students || [];
  },

  async createParent(payload) {
    const mutation = payload.userId
      ? DATA_CONNECT_MUTATIONS.CREATE_PARENT
      : DATA_CONNECT_MUTATIONS.CREATE_PARENT_WITHOUT_USER;
    const response = await dataConnectClient.mutate(mutation, payload);
    return {id: response.parent_insert, ...payload, isActive: true};
  },

  async getParentByUser(userId) {
    if (!userId) {
      return null;
    }

    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_PARENT_BY_USER, {
      userId,
    });
    return response.parents?.[0] || null;
  },
};

export default parentService;
