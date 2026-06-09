import { api } from "./api";
import { StorageService } from "../storage/storage.service";

api.interceptors.request.use(
  config => {
    const token =
      StorageService.get("token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);