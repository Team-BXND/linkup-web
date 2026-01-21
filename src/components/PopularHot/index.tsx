import * as S from "./style";
import QuestionItem from "../QuestionItem";
import { linkupAxios } from "@/libs/customAxios";
import { useState, useEffect } from "react";
import TileContainer from "../common/TileContainer";
import type { PostResponse } from "@/types/postResponse";

function PopularHot() {
  const [popularHotData, setPopularHotData] = useState<PostResponse>({
    data: [],
    meta: {
      total: 0,
      page: 1,
      pageSize: 0,
      totalPages: 0,
      hasNext: false,
      hasPrevious: false,
    },
  });

  useEffect(() => {
    linkupAxios
      .get(`/popular/hot`, {
        params: {
          page: 5,
        },
      })
      .then((response) => {
        setPopularHotData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <TileContainer title="🔥 지금 뜨거운 Q&A">
      <S.QuestionsList>
        {popularHotData.data.map((item, key) => (
          <QuestionItem item={item} index={key} showRank={true}></QuestionItem>
        ))}
      </S.QuestionsList>
    </TileContainer>
  );
}

export default PopularHot;
