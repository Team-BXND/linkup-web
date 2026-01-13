import { ACCESS_TOKEN_KEY } from "@/constants/token.constants"
import { cookie } from "@/utils/cookie"
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const accessToken = cookie.get(ACCESS_TOKEN_KEY);
  if (!accessToken) {
    return (
      <Navigate to="/login" replace />
    )
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoute;