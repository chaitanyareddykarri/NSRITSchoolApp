import auth from '@react-native-firebase/auth';
import {dataConnectConfig} from '../../config/env';

const buildConnectorName = () =>
  `projects/${dataConnectConfig.projectId}/locations/${dataConnectConfig.location}/services/${dataConnectConfig.serviceId}/connectors/${dataConnectConfig.connectorId}`;

const getAuthToken = async () => {
  const currentUser = auth().currentUser;

  if (!currentUser) {
    return null;
  }

  return currentUser.getIdToken();
};

const executeConnectorOperation = async ({operationName, variables = {}, type}) => {
  const token = await getAuthToken();
  const endpoint =
    type === 'mutation'
      ? 'executeMutation'
      : 'executeQuery';
  const response = await fetch(
    `${dataConnectConfig.apiBaseURL}/${buildConnectorName()}:${endpoint}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? {Authorization: `Bearer ${token}`} : {}),
      },
      body: JSON.stringify({operationName, variables}),
    },
  );

  const payload = await response.json();

  if (!response.ok || payload.errors?.length) {
    const message = payload.errors?.[0]?.message || 'Data Connect request failed';
    throw new Error(message);
  }

  return payload.data || {};
};

export const dataConnectClient = {
  async query(operationName, variables) {
    return executeConnectorOperation({operationName, variables, type: 'query'});
  },

  async mutate(operationName, variables) {
    return executeConnectorOperation({operationName, variables, type: 'mutation'});
  },
};

export default dataConnectClient;
