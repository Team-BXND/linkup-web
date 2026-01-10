import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style"
import { Tabs } from "@/constants/navigation.constants";
import { Caption } from "@/components/Text";

function Topbar() {
  const location = useLocation();
  const navigator = useNavigate();

  return (
    <S.Container>
      <S.Logo onClick={() => navigator('/home')} />
      <S.NavContainer>
        {Tabs.map((elem) => {
          return (
            <S.NavTab to={elem.path} active={elem.path === "/" ? location.pathname === "/" : location.pathname.slice(1).startsWith(elem.path)}>
              <Caption size="lg" weight="medium">{elem.text}</Caption>
            </S.NavTab>
          )
        })}
        
      </S.NavContainer>
    </S.Container>
  )
}

export default Topbar;