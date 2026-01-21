import * as S from "./style";
import QuestionItem from "../QuestionItem";
import { linkupAxios } from "@/libs/customAxios";
import { useState, useEffect } from "react";
import TileContainer from "../common/TileContainer";
import type { PostData, PostMeta, PostResponse } from "@/types/postResponse";
import Pagination from "../Pagination";

function PopularHot() {
  const [items, setItems] = useState<PostData[]>([]);
  const [meta, setMeta] = useState<PostMeta>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    linkupAxios
      .get<PostResponse>(`/popular/hot`, {
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
    <TileContainer title="🔥 지금 뜨거운 Q&A">
      <S.QuestionsList>
        {items.map((item, key) => (
          <QuestionItem item={item} index={key} showRank={true}></QuestionItem>
        ))}
      </S.QuestionsList>
      {meta ? (
        <Pagination page={page} setPage={setPage} totalPage={meta.totalPages} />
      ) : null}
    </TileContainer>
  );
}

export default PopularHot;
