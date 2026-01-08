import { Outlet } from "react-router-dom"
import * as S from "./style"

function Auth() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  )
}

export default Auth;