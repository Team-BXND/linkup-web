import * as S from "./style";
import type { ProfileMyQuestion } from "@/types/profile";
import { Body } from "@/components/common/Text";
import QuestionMeta from "../QuestionMeta";
import ProfileCategory from "../ProfileCategory";
import { useNavigate } from "react-router-dom";

function MyQuestionItem({ item }: { item: ProfileMyQuestion }) {
  const navigate = useNavigate();

  return (
    <S.MyQuestionItem onClick={() => {navigate(`/qna/${item.id}`)}}>
      <ProfileCategory content={item.category} />
      <Body size="md" weight="semibold">
        {item.title}
      </Body>
      <QuestionMeta likeCount={item.like} answerCount={item.commentCount} />
    </S.MyQuestionItem>
  );
}

export default MyQuestionItem;
