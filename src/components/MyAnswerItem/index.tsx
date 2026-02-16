import * as S from "./style";
import type { ProfileMyAnswer } from "@/types/profile";
import { Body, Caption } from "../common/Text";
import ProfileCategory from "../ProfileCategory";
import { redirect } from "react-router-dom";

function MyAnswerItem({ item }: { item: ProfileMyAnswer }) {
  const onClick = () => {
    redirect(`/detail/${item.id}`);
  };

  return (
    <S.MyAnswerItem onClick={onClick}>
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
