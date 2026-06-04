import {getAuth, getIdToken} from '@react-native-firebase/auth';
import {STORAGE_KEYS} from '../../config/constants';
import {dataConnectConfig, firebaseConfig} from '../../config/env';
import {storage} from '../storage/mmkvStorage';

const buildConnectorName = () =>
  `projects/${dataConnectConfig.projectId}/locations/${dataConnectConfig.location}/services/${dataConnectConfig.serviceId}/connectors/${dataConnectConfig.connectorId}`;

const getAuthToken = async () => {
  const authInstance = getAuth();
  const currentUser = authInstance.currentUser;

  if (!currentUser) {
    return storage.getString(STORAGE_KEYS.AUTH_TOKEN) || null;
  }

  const token = await getIdToken(currentUser);
  storage.set(STORAGE_KEYS.AUTH_TOKEN, token);
  return token;
};

const executeConnectorOperation = async ({operationName, variables = {}, type}) => {
  const token = await getAuthToken();
  const apiKey = firebaseConfig.apiKey;
  const connectorName = buildConnectorName();
  const endpoint = type === 'mutation' ? 'executeMutation' : 'executeQuery';

  if (!token) {
    throw new Error('Authentication required. Please sign in again.');
  }

  const response = await fetch(
    `${dataConnectConfig.apiBaseURL}/${connectorName}:${endpoint}?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Client': 'gl-js/ rn/nsrit-connect',
        ...(firebaseConfig.appId ? {'x-firebase-gmpid': firebaseConfig.appId} : {}),
        ...(token ? {'X-Firebase-Auth-Token': token} : {}),
      },
      body: JSON.stringify({
        name: connectorName,
        operationName,
        variables,
      }),
    },
  );

  const payload = await response.json();

  if (!response.ok || payload.errors?.length) {
    console.log('Data Connect Request Failed. Response Status:', response.status);
    console.log('Data Connect Error Payload:', JSON.stringify(payload, null, 2));
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
