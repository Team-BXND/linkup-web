import * as S from "./style";
import { Title, Caption } from "../Text";

function ProfileContainer({
  title,
  children,
  height,
}: {
  title: string;
  children: React.ReactNode;
  height: string;
}) {
  return (
    <S.ProfileContainer height={height}>
      <S.TitleCover>
        <Title size="md" weight="bold">
          내 {title}
        </Title>

        <S.InDetail>
          <Caption size="sm" weight="medium">
            더보기 &rarr;
          </Caption>
        </S.InDetail>
      </S.TitleCover>
      {children}
    </S.ProfileContainer>
  );
}

export default ProfileContainer;
