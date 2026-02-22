import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token.constants";
import { cookie } from "@/utils/cookie";
import tokenRefresh from "@/utils/tokenRefresh";
import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

const API_BASE_URL = import.meta.env.DEV
  ? "/api"
  : import.meta.env.VITE_SERVER_URL;

export const linkupAxios = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

const redirectToLogin = () => {
  cookie.remove(ACCESS_TOKEN_KEY);
  cookie.remove(REFRESH_TOKEN_KEY);

  if (window.location.pathname !== "/login") {
    window.location.href = "/login";
  }
};

linkupAxios.interceptors.request.use(
  async (config) => {
    const accessToken = cookie.get(ACCESS_TOKEN_KEY);
    const refreshToken = cookie.get(REFRESH_TOKEN_KEY);
    const isAuthRequest = config.url?.startsWith("/auth/");

    if (!isAuthRequest && !accessToken && refreshToken) {
      const newAccessToken = await tokenRefresh();
      if (newAccessToken) {
        config.headers.Authorization = `Bearer ${newAccessToken}`;
      }
      return config;
    }

    if (!isAuthRequest && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

linkupAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    const originalRequest = error.config as
      | (InternalAxiosRequestConfig & { _retry?: boolean })
      | undefined;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    const isAuthRequest = originalRequest.url?.startsWith("/auth/");
    if (
      (status === 401 || status === 403) &&
      !isAuthRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const newAccessToken = await tokenRefresh();
      if (newAccessToken) {
        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return linkupAxios(originalRequest);
      }

      alert("로그인이 필요한 서비스입니다.");
      redirectToLogin();
      return new Promise(() => {});
    }

    return Promise.reject(error);
  },
);
