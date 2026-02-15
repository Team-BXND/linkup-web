import * as S from "./style";
import type { ProfileMyQuestion } from "@/types/profile";
import MyQuestionItem from "../MyQuestionItem";
import ProfileContainer from "../ProfileContainer";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";

interface ProfileMyQuestionListResponse {
  status: number;
  data: ProfileMyQuestion[];
}

function MyQuestion() {
  const [questionsData, setQuestionsData] = useState<ProfileMyQuestion[]>([]);

  useEffect(() => {
    linkupAxios
      .get<ProfileMyQuestionListResponse>(`/profile/myque`, {
        params: {
          page: 0,
        },
      })
      .then((response) => {
        setQuestionsData(response.data.data ?? []);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <ProfileContainer title="질문" destination="/profile/questions">
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
