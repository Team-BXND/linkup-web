import * as S from "./style";
import { Title, Caption } from "../common/Text";
import { useNavigate } from "react-router-dom";

function ProfileContainer({
  title,
  children,
  height,
  destination,
}: {
  title: string;
  children: React.ReactNode;
  height: string;
  destination: string;
}) {
  const navigate = useNavigate();

  return (
    <S.ProfileContainer height={height}>
      <S.TitleCover>
        <Title size="md" weight="bold">
          내 {title}
        </Title>

        <S.InDetail>
          <Caption
            size="sm"
            weight="medium"
            onClick={() => navigate(destination)}
          >
            더보기 &rarr;
          </Caption>
        </S.InDetail>
      </S.TitleCover>
      {children}
    </S.ProfileContainer>
  );
}

export default ProfileContainer;
