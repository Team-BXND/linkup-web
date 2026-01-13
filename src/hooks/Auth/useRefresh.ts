import { ACCESS_TOKEN_KEY, ACCESS_TOKEN_LIFETIME, REFRESH_TOKEN_KEY, REFRESH_TOKEN_LIFETIME } from "@/constants/token.constants"
import { publicAxios } from "@/libs/customAxios";
import { cookie } from "@/utils/cookie"
import { useNavigate } from "react-router-dom";

export const useRefresh = () => {
  const refreshToken = cookie.get(REFRESH_TOKEN_KEY);
  const navigate = useNavigate();

  if (refreshToken) {
    publicAxios.post("/auth/refresh", {
      refreshToken: refreshToken
    })
    .then((response) => {
      const newAccessToken = response.data.accessToken;
      const newRefreshToken = response.data.refreshToken;

      cookie.set(ACCESS_TOKEN_KEY, newAccessToken, ACCESS_TOKEN_LIFETIME);
      cookie.set(REFRESH_TOKEN_KEY, newRefreshToken, REFRESH_TOKEN_LIFETIME);
    })
    .catch(() => {
      cookie.remove(ACCESS_TOKEN_KEY);
      cookie.remove(REFRESH_TOKEN_KEY);
      navigate("/");
    })
  }
}