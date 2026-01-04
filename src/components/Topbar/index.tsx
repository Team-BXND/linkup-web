import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style"
import { Tabs } from "@/constants/navigation.constants";

function Topbar() {
  const location = useLocation();
  const navigator = useNavigate();

  return (
    <S.Container>
      <S.Logo onClick={() => navigator('/home')} />
      <S.NavContainer>
        {Tabs.map((elem) => {
          return (
            <S.NavTab to={elem.path} active={location.pathname.includes(elem.path)}>{elem.text}</S.NavTab>
          )
        })}
        
      </S.NavContainer>
    </S.Container>
  )
}

export default Topbar;