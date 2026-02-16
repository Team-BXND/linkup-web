import * as S from "./style";
import type { ProfileMyQuestion } from "@/types/profile";
import { Body } from "@/components/common/Text";
import QuestionMeta from "../QuestionMeta";
import ProfileCategory from "../ProfileCategory";
import { redirect } from "react-router-dom";

function MyQuestionItem({ item }: { item: ProfileMyQuestion }) {
  const onClick = () => {
    redirect(`/detail/${item.id}`);
  };
  return (
    <S.MyQuestionItem onClick={onClick}>
      <S.QuestionContent>
        <ProfileCategory content={item.category} />
        <Body size="md" weight="semibold">
          {item.title}
        </Body>
      </S.QuestionContent>

      <QuestionMeta likeCount={item.like} answerCount={item.commentCount} />
    </S.MyQuestionItem>
  );
}

export default MyQuestionItem;
