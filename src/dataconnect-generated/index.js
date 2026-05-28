import dataConnectClient from '../services/dataconnect/dataConnectClient';
import {
  DATA_CONNECT_MUTATIONS,
  DATA_CONNECT_QUERIES,
} from '../services/dataconnect/operations';

export const executeNsritQuery = (operationName, variables) =>
  dataConnectClient.query(operationName, variables);

export const executeNsritMutation = (operationName, variables) =>
  dataConnectClient.mutate(operationName, variables);

export {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES};
