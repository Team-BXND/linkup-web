import * as S from "./style";
import { Title } from "../common/Text";
import QuestionItem from "../common/QuestionItem";
import { linkupAxios } from "@/libs/customAxios";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import type { PostData, PostMeta, PostResponse } from "@/types/postResponse";

function Popular() {
  const [items, setItems] = useState<PostData[]>([]);
  const [meta, setMeta] = useState<PostMeta>({
    total: 1,
    page: 0,
    pageSize: 10,
    totalPages: 0,
    hasNext: false,
    hasPrevious: false,
  });
  const [page, setPage] = useState(0);

  useEffect(() => {
    linkupAxios
      .get<PostResponse>("/popular", {
        params: {
          page: page,
        },
      })
      .then((response) => {
        setItems(response.data.data ?? []);
        setMeta((prev) => response.data.meta ?? prev);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  return (
    <S.Container>
      <S.TextWrapper>
        <Title size="md" weight="bold">
          🔥 가장 유용했던 글
        </Title>
      </S.TextWrapper>

      <S.QuestionsList>
        {items.map((item, key) => (
          <QuestionItem item={item} index={key} showRank={false}></QuestionItem>
        ))}
      </S.QuestionsList>
      <Pagination page={page} totalPage={meta.totalPages} setPage={setPage} />
    </S.Container>
  );
}

export default Popular;
