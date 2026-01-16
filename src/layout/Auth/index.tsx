import { Outlet, useLocation } from "react-router-dom";
import * as S from "./style";
import AuthHeader from "@/components/AuthHeader";

function Auth() {
  const location = useLocation();
  const text = location.pathname.slice(1).startsWith("login")
    ? "로그인"
    : location.pathname.slice(1).startsWith("signup")
    ? "회원가입"
    : "비밀번호 찾기";
  return (
    <S.Container>
      <AuthHeader text={text} />
      <Outlet />
    </S.Container>
  );
}

export default Auth;
