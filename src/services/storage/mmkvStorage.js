import {MMKV} from 'react-native-mmkv';

const storage = new MMKV({
  id: 'nsrit-connect-storage',
});

export {storage};

export const setJSON = (key, value) => {
  try {
    storage.set(key, JSON.stringify(value));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('setJSON failed:', e);
  }
};

export const getJSON = key => {
  try {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('getJSON failed:', e);
    return null;
  }
};

export const removeStorageKeys = keys => {
  try {
    keys.forEach(key => storage.delete(key));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('removeStorageKeys failed:', e);
  }
};
