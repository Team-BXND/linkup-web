import * as S from "./style";
import { Title, Caption } from "../common/Text";
import { useNavigate } from "react-router-dom";
import TileContainer from "../common/TileContainer";

function ProfileContainer({
  title,
  children,
  destination,
}: {
  title: string;
  children: React.ReactNode;
  destination: string;
}) {
  const navigate = useNavigate();

  return (
    <TileContainer>
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
    </TileContainer>
  );
}

export default ProfileContainer;
