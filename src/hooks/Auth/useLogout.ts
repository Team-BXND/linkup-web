import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token.constants";
import { cookie } from "@/utils/cookie";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    cookie.remove(ACCESS_TOKEN_KEY);
    cookie.remove(REFRESH_TOKEN_KEY);
    navigate("/login");
  };

  return { logout };
};
