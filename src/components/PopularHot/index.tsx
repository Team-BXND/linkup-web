import * as S from "./style";
import { Title } from "../common/Text";
import QuestionItem from "../QuestionItem";
import { linkupAxios } from "@/libs/customAxios";
import { useState, useEffect } from "react";
import type {
  PopularHotItem,
  PopularHotMeta,
  PopularHotResponse,
} from "@/types/popularHot";
import Pagination from "../Pagination";
import { popularHot } from "@/constants/popularHot.constants";

function PopularHot() {
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
      .get<PopularHotResponse>(`/popular/hot`, {
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
          🔥 지금 뜨거운 Q&A
        </Title>
      </S.TextWrapper>
      <S.QuestionsList>
        {items.map((item, key) => (
          <QuestionItem item={item} index={key} showRank={true}></QuestionItem>
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

export default PopularHot;
