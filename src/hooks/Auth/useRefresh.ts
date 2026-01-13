import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token.constants"
import { publicAxios } from "@/libs/customAxios";
import { cookie } from "@/utils/cookie"
import { useLogin } from "@/hooks/Auth/useLogin";
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

      useLogin(newAccessToken, newRefreshToken);
    })
    .catch(() => {
      cookie.remove(ACCESS_TOKEN_KEY);
      cookie.remove(REFRESH_TOKEN_KEY);
      navigate("/");
    })
  }
}