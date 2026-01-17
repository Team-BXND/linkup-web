import * as S from "./style";
import { Body } from "../common/Text";

function MyProfileItem({
  subtitle,
  content,
}: {
  subtitle: string;
  content: string | number;
}) {
  return (
    <S.MyProfileItem>
      <S.Subtitle>
        <Body size="sm" weight="medium">
          {subtitle}
        </Body>
      </S.Subtitle>

      <S.Content subtitle={subtitle}>
        <Body size="md" weight="semibold">
          {content}
        </Body>
      </S.Content>
    </S.MyProfileItem>
  );
}

export default MyProfileItem;
