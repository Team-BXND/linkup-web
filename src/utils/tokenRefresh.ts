import {
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_LIFETIME,
  REFRESH_TOKEN_KEY,
  REFRESH_TOKEN_LIFETIME,
} from "@/constants/token.constants";
import { cookie } from "@/utils/cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const tokenRefresh = () => {
  const refreshToken = cookie.get(REFRESH_TOKEN_KEY);
  const navigate = useNavigate();

  if (refreshToken) {
    axios
      .post("/auth/refresh", {
        refreshToken: refreshToken,
      })
      .then((response) => {
        const newAccessToken = response.data.accessToken;
        const newRefreshToken = response.data.refreshToken;

        cookie.set(ACCESS_TOKEN_KEY, newAccessToken, ACCESS_TOKEN_LIFETIME);
        cookie.set(REFRESH_TOKEN_KEY, newRefreshToken, REFRESH_TOKEN_LIFETIME);

        return newAccessToken;
      })
      .catch(() => {
        cookie.remove(ACCESS_TOKEN_KEY);
        cookie.remove(REFRESH_TOKEN_KEY);
        navigate("/");
      });
  }
};

export default tokenRefresh;
