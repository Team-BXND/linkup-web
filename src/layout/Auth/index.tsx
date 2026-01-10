import { Outlet } from "react-router-dom"
import * as S from "./style"
import AuthHeader from "@/components/AuthHeader";

function Auth() {
  return (
    <S.Container>
      <AuthHeader text="회원가입"/>
      <Outlet />
    </S.Container>
  )
}

export default Auth;