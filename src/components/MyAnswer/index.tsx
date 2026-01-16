import * as S from "./style";
import type { ProfileMyAnswerResponse } from "@/types/profile";
import MyAnswerItem from "../MyAnswerItem";
import ProfileContainer from "../ProfileContainer";
import { publicAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function MyAnswer() {
  const [answersData, setAnswersData] = useState<ProfileMyAnswerResponse>({
    data: [],
    meta:{
      total:0,
      page:1,
      pageSize:0,
      totalPages:0,
      hasNext:false,
      hasPrevious:false,
    }
  });
  useEffect(() => {
    publicAxios
      .get(`${SERVER_URL}/profile/myans`, {
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
