import * as S from "./style";
import type { ProfileMyQuestion } from "@/types/profile";
import { Body } from "../Text";
import QuestionMeta from "../QuestionMeta";
import Category from "../Category";

function MyQuestionItem({ item }: { item: ProfileMyQuestion }) {
  return (
    <S.MyQuestionItem>
      <Category content={item.category} />
      <Body size="md" weight="semibold">
        {item.title}
      </Body>
      <QuestionMeta likeCount={item.like} answerCount={item.commentCount} />
    </S.MyQuestionItem>
  );
}

export default MyQuestionItem;
