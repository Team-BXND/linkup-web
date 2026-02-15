import * as S from "./style";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";
import TopRankItem from "@/components/TopRankItem/index.tsx";
import BottomRankItem from "@/components/BottomRankItem/index.tsx";
import type { RankingResponse } from "@/types/ranking";
import TileContainer from "@/components/common/TileContainer";

interface RankingApiResponse {
  status: number;
  data: RankingResponse["data"];
}

function Ranking() {
  const [rankingData, setRankingData] = useState<RankingResponse>({ data: [] });

  useEffect(() => {
    linkupAxios
      .get<RankingApiResponse>("/ranking")
      .then((response) => {
        setRankingData({ data: response.data.data ?? [] });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const podiumOrder = [2, 1, 3];

  const topThree = rankingData.data
    .slice(0, 3)
    .sort((a, b) => podiumOrder.indexOf(a.rank) - podiumOrder.indexOf(b.rank));

  return (
    <S.Container>
      <TileContainer title="🏆 답변자 랭킹">
        <S.TopRankContainer>
          {topThree.map((item) => (
            <TopRankItem key={item.rank} item={item} />
          ))}
        </S.TopRankContainer>
      </TileContainer>

      <TileContainer>
        {rankingData.data.slice(3).map((item) => (
          <BottomRankItem key={item.rank} item={item} />
        ))}
      </TileContainer>
    </S.Container>
  );
}

export default Ranking;
