import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token.constants"
import { cookie } from "@/utils/cookie"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* refreshToken 유효기간 : 7일 */
const REFRESH_TOKEN_LIFETIME = 168;
/* accessToken 유효기간 : 30분 */
const ACCESS_TOKEN_LIFETIME = 0.5;

export const useLogin = (accessToken: string, refreshToken: string) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (accessToken && refreshToken) {
      cookie.set(ACCESS_TOKEN_KEY, accessToken, ACCESS_TOKEN_LIFETIME);
      cookie.set(REFRESH_TOKEN_KEY, refreshToken, REFRESH_TOKEN_LIFETIME);
    };
    navigate("/");
  });
};