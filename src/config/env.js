export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

export const apiConfig = {
  baseURL: '',
  timeout: 15000,
};

export const dataConnectConfig = {
  projectId: firebaseConfig.projectId || 'nsrit-school-2b749',
  location: 'asia-south1',
  serviceId: 'nsrit-school-2b749-service',
  connectorId: 'nsrit',
  apiBaseURL: 'https://firebasedataconnect.googleapis.com/v1beta',
};
