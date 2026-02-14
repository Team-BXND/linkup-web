import {
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_LIFETIME,
  REFRESH_TOKEN_KEY,
  REFRESH_TOKEN_LIFETIME,
} from "@/constants/token.constants";
import { cookie } from "@/utils/cookie";
import axios from "axios";

const API_BASE_URL = import.meta.env.DEV
  ? "/api"
  : import.meta.env.VITE_SERVER_URL;

const tokenRefresh = async (): Promise<string | null> => {
  const refreshToken = cookie.get(REFRESH_TOKEN_KEY);

  if (!refreshToken) return null;

  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/refresh`,
      {
        refreshToken: refreshToken,
      },
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    const responseData = response.data?.data ?? response.data;
    const newAccessToken = responseData?.[ACCESS_TOKEN_KEY];
    const newRefreshToken = responseData?.[REFRESH_TOKEN_KEY];

    if (!newAccessToken || !newRefreshToken) {
      throw new Error("Token refresh response is invalid.");
    }

    cookie.set(ACCESS_TOKEN_KEY, newAccessToken, ACCESS_TOKEN_LIFETIME);
    cookie.set(REFRESH_TOKEN_KEY, newRefreshToken, REFRESH_TOKEN_LIFETIME);

    return newAccessToken;
  } catch {
    cookie.remove(ACCESS_TOKEN_KEY);
    cookie.remove(REFRESH_TOKEN_KEY);

    if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
    return null;
  }
};

export default tokenRefresh;
