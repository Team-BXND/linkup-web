import * as S from "./style";
import type { ProfileMyQuestion } from "@/types/profile";
import { Body } from "@/components/common/Text";
import QuestionMeta from "../QuestionMeta";
import ProfileCategory from "../ProfileCategory";

function MyQuestionItem({ item }: { item: ProfileMyQuestion }) {
  return (
    <S.MyQuestionItem>
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
