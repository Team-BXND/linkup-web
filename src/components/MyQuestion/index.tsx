import * as S from "./style";
import type { ProfileMyQuestion } from "@/types/profile";
import MyQuestionItem from "../MyQuestionItem";
import ProfileContainer from "../ProfileContainer";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";

function MyQuestion() {
  const [questionsData, setQuestionsData] = useState<ProfileMyQuestion[]>([]);

  useEffect(() => {
    linkupAxios
      .get(`/profile/myque`, {
        params: {
          page: 1,
        },
      })
      .then((response) => {
        setQuestionsData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <ProfileContainer title="질문" destination="profile/questions">
      <S.ScrollArea>
        <S.DetailCover>
          {questionsData.map((item) => (
            <MyQuestionItem key={item.id} item={item} />
          ))}
        </S.DetailCover>
      </S.ScrollArea>
    </ProfileContainer>
  );
}

export default MyQuestion;
