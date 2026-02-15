import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token.constants";
import { cookie } from "@/utils/cookie";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);
  const refreshToken = cookie.get(REFRESH_TOKEN_KEY);

  if (!accessToken && !refreshToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
