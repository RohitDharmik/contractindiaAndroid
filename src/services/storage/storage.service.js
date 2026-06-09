import { storage } from "./mmkv";

export const StorageService = {
  set(key, value) {
    storage.set(key, JSON.stringify(value));
  },

  get(key) {
    const value = storage.getString(key);

    return value ? JSON.parse(value) : null;
  },

  remove(key) {
    storage.delete(key);
  },

  clear() {
    storage.clearAll();
  },
};