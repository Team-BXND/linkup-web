import * as S from "./style";
import type { ProfileMyQuestion } from "@/types/profile";
import MyQuestionItem from "../MyQuestionItem";
import ProfileContainer from "../ProfileContainer";

function MyQuestion({ items }: { items: ProfileMyQuestion[] }) {
  return (
    <ProfileContainer title="질문" height="798px">
      <S.DetailCover>
        {items.map((item) => (
          <MyQuestionItem key={item.id} item={item} />
        ))}
      </S.DetailCover>
    </ProfileContainer>
  );
}

export default MyQuestion;
