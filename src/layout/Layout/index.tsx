import { Outlet } from "react-router-dom";
import * as S from "./style";
import Topbar from "@/components/Topbar";

function Layout() {
  return (
    <S.Container>
      <Topbar />
      <Outlet />
    </S.Container>
  );
}

export default Layout;
