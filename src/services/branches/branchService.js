import dataConnectClient from '../dataconnect/dataConnectClient';
import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';

export const branchService = {
  async getBranches({limit = 100, offset = 0} = {}) {
    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_BRANCHES, {
      limit,
      offset,
    });
    return response.branches || [];
  },

  async createBranch(payload) {
    const response = await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.CREATE_BRANCH, {
      name: payload.name,
      branchCode: payload.branchCode || payload.code,
      address: payload.address || '',
      city: payload.city || '',
      state: payload.state || '',
      pincode: payload.pincode || '',
      phone: payload.phone || payload.contactNumber || '',
      email: payload.email || '',
      status: payload.status || 'ACTIVE',
    });

    return {
      id: response.branch_insert,
      ...payload,
      branchCode: payload.branchCode || payload.code,
      status: payload.status || 'ACTIVE',
      isActive: true,
    };
  },
};

export default branchService;
