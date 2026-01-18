import * as S from "./style";
import { Title } from "../common/Text";
import QuestionItem from "../QuestionItem";
import { popularHot } from "@/constants/popularHot.constants";
import { linkupAxios } from "@/libs/customAxios";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import type {
  PopularHotItem,
  PopularHotMeta,
  PopularHotResponse,
} from "@/types/popularHot";

function Popular() {
  const [items, setItems] = useState<PopularHotItem[]>([]);
  const [meta, setMeta] = useState<PopularHotMeta>({
    total: 1,
    page: 1,
    pageSize: 10,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    linkupAxios
      .get<PopularHotResponse>("/popular", {
        params: {
          page: page,
        },
      })
      .then((response) => {
        setItems(response.data.data ?? []);
        setMeta(response.data.meta ?? meta);
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
      <Pagination
        currentPage={page}
        totalPages={meta.totalPages}
        onChangePage={setPage}
      />
    </S.Container>
  );
}

export default Popular;
