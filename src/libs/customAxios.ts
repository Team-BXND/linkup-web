import { useRefresh } from "@/hooks/Auth/useRefresh";
import { cookie } from "@/utils/cookie";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const publicAxios = axios.create({
  //로그인 등 토큰 필요 없는 경우
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateAxios = axios.create({
  //axios 인스턴스 생성
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

privateAxios.interceptors.request.use(
  async (config) => {
    config.withCredentials = true;

    const accessToken = cookie.get("accessToken");
    const refreshToken = cookie.get("refreshToken");

    if (!accessToken && refreshToken) {
      await useRefresh();
    }
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
