import { cookie } from "@/utils/cookie";
import tokenRefresh from "@/utils/tokenRefresh";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const linkupAxios = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

linkupAxios.interceptors.request.use(
  async (config) => {
    const accessToken = cookie.get("accessToken");
    const refreshToken = cookie.get("refreshToken");

    if (!accessToken && refreshToken) {
      const newAccessToken = await tokenRefresh();
      config.headers["Authorization"] = `Bearer ${newAccessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
