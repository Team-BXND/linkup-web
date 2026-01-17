import * as S from "./style";
import type { ProfileMyQuestionResponse } from "@/types/profile";
import MyQuestionItem from "../MyQuestionItem";
import ProfileContainer from "../ProfileContainer";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";

function MyQuestion() {
  const [questionsData, setQuestionsData] = useState<ProfileMyQuestionResponse>(
    {
      data: [],
      meta: {
        total: 0,
        page: 1,
        pageSize: 0,
        totalPages: 0,
        hasNext: false,
        hasPrevious: false,
      },
    }
  );

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
        console.log(error);
      });
  }, []);
  return (
    <ProfileContainer title="질문" height="798px">
      <S.DetailCover>
        {questionsData.data.map((item) => (
          <MyQuestionItem key={item.id} item={item} />
        ))}
      </S.DetailCover>
    </ProfileContainer>
  );
}

export default MyQuestion;
