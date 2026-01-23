import * as S from "./style";
import type { ProfileMyAnswer } from "@/types/profile";
import { Body, Caption } from "../common/Text";
import ProfileCategory from "../ProfileCategory";

function MyAnswerItem({ item }: { item: ProfileMyAnswer }) {
  return (
    <S.MyAnswerItem>
      <S.QuestionCover>
        <ProfileCategory content={item.category} />
        <S.QuestionTitle>
          <Caption size="lg" weight="medium">
            {item.title}
          </Caption>
        </S.QuestionTitle>
      </S.QuestionCover>

      <Body size="md" weight="semibold">
        {item.preview}
      </Body>
    </S.MyAnswerItem>
  );
}

export default MyAnswerItem;
