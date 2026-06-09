
import api
from "../api/axiosClient";

import {
  ENDPOINTS
}
from "../api/endpoints";

export const loginApi =
(payload) =>
  api.post(
    ENDPOINTS.LOGIN,
    payload
  );

export const registerApi =
(payload) =>
  api.post(
    ENDPOINTS.REGISTER,
    payload
  );
