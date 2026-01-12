import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token.constants"
import { cookie } from "@/utils/cookie"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = (accessToken: string, refreshToken: string) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (accessToken && refreshToken) {
      cookie.set(ACCESS_TOKEN_KEY, accessToken);
      cookie.set(REFRESH_TOKEN_KEY, refreshToken);
    };
    navigate("/");
  });
};