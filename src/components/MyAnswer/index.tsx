import * as S from "./style";
import type {
  ProfileMyAnswerResponse,
  ProfileMyAnswer,
} from "@/types/profile";
import MyAnswerItem from "../MyAnswerItem";
import ProfileContainer from "../ProfileContainer";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";

function MyAnswer() {
  const [answersData, setAnswersData] = useState<ProfileMyAnswer[]>([]);

  useEffect(() => {
    linkupAxios
      .get<ProfileMyAnswerResponse>(`/profile/myans`, {
        params: {
          page: 1,
        },
      })
      .then((response) => {
        setAnswersData(response.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <ProfileContainer
      title="답변"
      destination="/profile/answers"
    >
      <S.ScrollArea>
        <S.DetailCover>
          {answersData.map((item) => (
            <MyAnswerItem key={item.id} item={item} />
          ))}
        </S.DetailCover>
      </S.ScrollArea>
    </ProfileContainer>
  );
}

export default MyAnswer;
