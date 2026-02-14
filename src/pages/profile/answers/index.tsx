import * as S from "./style";
import { linkupAxios } from "@/libs/customAxios";
import type {
  ProfileMyAnswer,
  ProfileMeta,
} from "@/types/profile";

import MyAnswerItem from "@/components/MyAnswerItem";
import Pagination from "@/components/Pagination";
import { Title } from "@/components/common/Text";
import { useEffect, useState } from "react";

interface ProfileMyAnswerPageResponse {
  status: number;
  data: ProfileMyAnswer[];
  meta: ProfileMeta;
}

function Answers() {
  const [answersData, setAnswersData] = useState<ProfileMyAnswer[]>([]);
  const [meta, setMeta] = useState<ProfileMeta>({
    total: 0,
    page: 0,
    pageSize: 10,
    totalPages: 0,
    hasNext: false,
    hasPrevious: false,
  });
  const [page, setPage] = useState(0);

  useEffect(() => {
    linkupAxios
      .get<ProfileMyAnswerPageResponse>(`/profile/myans`, {
        params: {
          page: page,
        },
      })
      .then((response) => {
        setAnswersData(response.data.data ?? []);
        setMeta(response.data.meta);
      })
      .catch((error) => {
        alert(error);
      });
  }, [page]);

  return (
    <S.Container>
      <S.TextCover>
        <Title size="md" weight="bold">
          내 답변
        </Title>
      </S.TextCover>

      <S.ScrollArea>
        <S.DetailCover>
          {answersData.map((item) => (
            <MyAnswerItem key={item.id} item={item} />
          ))}
        </S.DetailCover>
      </S.ScrollArea>

      <Pagination
        page={page}
        totalPage={meta.totalPages}
        setPage={setPage}
      ></Pagination>
    </S.Container>
  );
}

export default Answers;
