import * as S from "./style";
import type { ProfileMyAnswerResponse } from "@/types/profile";
import MyAnswerItem from "../MyAnswerItem";
import ProfileContainer from "../ProfileContainer";
import { privateAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";

function MyAnswer() {
  const [answersData, setAnswersData] = useState<ProfileMyAnswerResponse>({
    data: [],
    meta: {
      total: 0,
      page: 1,
      pageSize: 0,
      totalPages: 0,
      hasNext: false,
      hasPrevious: false,
    },
  });
  useEffect(() => {
    privateAxios
      .get(`/profile/myans`, {
        params: {
          page: 1,
        },
      })
      .then((response) => {
        setAnswersData(response.data);
      });
  }, []);

  return (
    <ProfileContainer title="답변" height="355px">
      <S.ScrollArea>
        <S.DetailCover>
          {answersData.data.map((item) => (
            <MyAnswerItem key={item.id} item={item} />
          ))}
        </S.DetailCover>
      </S.ScrollArea>
    </ProfileContainer>
  );
}

export default MyAnswer;
