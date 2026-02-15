import * as S from "./style";
import { linkupAxios } from "@/libs/customAxios";
import type {
  ProfileMyQuestion,
  ProfileMeta,
} from "@/types/profile";

import MyQuestionItem from "@/components/MyQuestionItem";
import Pagination from "@/components/Pagination";
import { Title } from "@/components/common/Text";
import { useEffect, useState } from "react";

interface ProfileMyQuestionPageResponse {
  status: number;
  data: ProfileMyQuestion[];
  meta: ProfileMeta;
}

function Questions() {
  const [questionData, setQuestionData] = useState<ProfileMyQuestion[]>([]);
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
      .get<ProfileMyQuestionPageResponse>(`/profile/myque`, {
        params: {
          page: page,
        },
      })
      .then((response) => {
        setQuestionData(response.data.data ?? []);
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
          내 질문
        </Title>
      </S.TextCover>

      <S.ScrollArea>
        <S.DetailCover>
          {questionData.map((item) => (
            <MyQuestionItem key={item.id} item={item} />
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

export default Questions;
