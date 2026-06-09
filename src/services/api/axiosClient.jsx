
import axios from "axios";

import { ENV }
from "../../constants/env";

import { tokenManager }
from "../../utils/tokenManager";

const api = axios.create({

  baseURL:
    ENV.API_BASE_URL,

  timeout:
    ENV.API_TIMEOUT,
});

api.interceptors.request.use(
(config) => {

  const token =
    tokenManager.getAccessToken();

  if (token) {

    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
}
);

export default api;
