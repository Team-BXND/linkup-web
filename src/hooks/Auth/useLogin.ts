import {
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_LIFETIME,
  REFRESH_TOKEN_KEY,
  REFRESH_TOKEN_LIFETIME,
} from "@/constants/token.constants";
import { cookie } from "@/utils/cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = (accessToken: string, refreshToken: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && refreshToken) {
      cookie.set(ACCESS_TOKEN_KEY, accessToken, ACCESS_TOKEN_LIFETIME);
      cookie.set(REFRESH_TOKEN_KEY, refreshToken, REFRESH_TOKEN_LIFETIME);
    }
    navigate("/");
  });
};
