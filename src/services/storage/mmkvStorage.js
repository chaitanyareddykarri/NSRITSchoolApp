import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'nsrit-connect-storage',
});

export const setJSON = (key, value) => {
  storage.set(key, JSON.stringify(value));
};

export const getJSON = key => {
  const value = storage.getString(key);
  return value ? JSON.parse(value) : null;
};

export const removeStorageKeys = keys => {
  keys.forEach(key => storage.delete(key));
};
