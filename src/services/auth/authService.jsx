
import {
  loginApi,
  registerApi
}
from "./authApi";

export const authService = {

  login(payload) {

    return loginApi(
      payload
    );
  },

  register(payload) {

    return registerApi(
      payload
    );
  },
};
