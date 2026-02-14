import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token.constants";
import { cookie } from "@/utils/cookie";
import tokenRefresh from "@/utils/tokenRefresh";
import axios from "axios";

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
  }
);
