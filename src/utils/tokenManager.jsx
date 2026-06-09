
import { storage }
from "./secureStorage";

import {
  STORAGE_KEYS
}
from "../constants/storageKeys";

export const tokenManager = {

  getAccessToken() {

    return storage.getString(
      STORAGE_KEYS.ACCESS_TOKEN
    );

  },

  setAccessToken(token) {

    storage.set(
      STORAGE_KEYS.ACCESS_TOKEN,
      token
    );

  },

  removeAccessToken() {

    storage.delete(
      STORAGE_KEYS.ACCESS_TOKEN
    );

  },
};
