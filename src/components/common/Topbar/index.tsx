import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { Tabs } from "@/constants/navigation.constants";
import { Caption } from "@/components/common/Text";
import { ACCESS_TOKEN_KEY } from "@/constants/token.constants";
import { cookie } from "@/utils/cookie";

function Topbar() {
  const location = useLocation();
  const navigator = useNavigate();

  return (
    <S.Container>
      <S.Logo onClick={() => navigator("/")} />
      <S.NavContainer>
        {Tabs.map((elem) => {
          const accessToken = cookie.get(ACCESS_TOKEN_KEY);
          let path = elem.path;
          let text = elem.text;
          if (!accessToken) {
            path = elem.path === "profile" ? "login" : elem.path;
            text = elem.path === "profile" ? "Login" : elem.text;
          }
          return (
            <S.NavTab
              to={path}
              active={
                path === "/"
                  ? location.pathname === "/"
                  : location.pathname.slice(1).startsWith(path)
              }
            >
              <Caption size="lg" weight="medium">
                {text}
              </Caption>
            </S.NavTab>
          );
        })}
      </S.NavContainer>
    </S.Container>
  );
}

export default Topbar;
