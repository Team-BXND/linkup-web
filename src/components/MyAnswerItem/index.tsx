import * as S from "./style";
import type { ProfileMyAnswer } from "@/types/profile";
import Category from "../Category";
import { Body, Caption } from "../common/Text";

function MyAnswerItem({ item }: { item: ProfileMyAnswer }) {
  return (
    <S.MyAnswerItem>
      <S.QuestionCover>
        <Category content={item.category} />
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
