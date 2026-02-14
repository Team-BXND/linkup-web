import * as S from "./style";
import { linkupAxios } from "@/libs/customAxios";
import type {
  ProfileMyAnswer,
  ProfileMyAnswerResponse,
  ProfileMeta,
} from "@/types/profile";

import MyAnswerItem from "@/components/MyAnswerItem";
import Pagination from "@/components/Pagination";
import { Title } from "@/components/common/Text";
import { useEffect, useState } from "react";
import { extractPaged, normalizeMeta } from "@/utils/apiNormalizer";

function Answers() {
  const [answersData, setAnswersData] = useState<ProfileMyAnswer[]>([]);
  const [meta, setMeta] = useState<ProfileMeta>(normalizeMeta(undefined));
  const [page, setPage] = useState(0);

  useEffect(() => {
    linkupAxios
      .get<ProfileMyAnswerResponse>(`/profile/myans`, {
        params: {
          page: page,
        },
      })
      .then((response) => {
        const parsed = extractPaged<ProfileMyAnswer>(response.data);
        setAnswersData(parsed.data);
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
