import * as S from "./style";

interface AuthHeaderProps {
  text: string;
}

function AuthHeader(props: AuthHeaderProps) {
  return (
    <S.Container>
      <S.StyledLogo />
      <S.PageTitle size="default" weight="semibold">
        {props.text}
      </S.PageTitle>
    </S.Container>
  );
}

export default AuthHeader;
