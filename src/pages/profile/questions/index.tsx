import * as S from "./style";
import { linkupAxios } from "@/libs/customAxios";
import type {
  ProfileMyQuestion,
  ProfileMyQuestionResponse,
  ProfileMeta,
} from "@/types/profile";

import MyQuestionItem from "@/components/MyQuestionItem";
import Pagination from "@/components/Pagination";
import { Title } from "@/components/common/Text";
import { useEffect, useState } from "react";
import { extractPaged, normalizeMeta } from "@/utils/apiNormalizer";

function Questions() {
  const [questionData, setQuestionData] = useState<ProfileMyQuestion[]>([]);
  const [meta, setMeta] = useState<ProfileMeta>(normalizeMeta(undefined));
  const [page, setPage] = useState(0);

  useEffect(() => {
    linkupAxios
      .get<ProfileMyQuestionResponse>(`/profile/myque`, {
        params: {
          page: page,
        },
      })
      .then((response) => {
        const parsed = extractPaged<ProfileMyQuestion>(response.data);
        setQuestionData(parsed.data);
        setMeta(parsed.meta);
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
