import QuestionItem from "@/components/QuestionItem";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import type { PostData, PostMeta, PostResponse } from "@/types/postResponse";
import TileContainer from "../common/TileContainer";

function Popular() {
  const [data, setData] = useState<PostData[]>();
  const [meta, setMeta] = useState<PostMeta>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    linkupAxios
      .get<PostResponse>("/popular", {
        params: {
          page: page,
        },
      })
      .then((response) => {
        setData(response.data.data);
        setMeta(response.data.meta);
      })
      .catch(() => {
        alert("유용했던 글 리스트를 불러오는데 실패했습니다.");
      });
  }, []);

  return (
    <TileContainer title="🔥 가장 유용했던 글">
      {data &&
        data.map((item, key) => (
          <QuestionItem item={item} index={key} showRank={false}></QuestionItem>
        ))}
      {meta && (
        <Pagination page={page} setPage={setPage} totalPage={meta.totalPages} />
      )}
    </TileContainer>
  );
}

export default Popular;
