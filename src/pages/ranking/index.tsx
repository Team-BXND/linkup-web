import * as S from "./style";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";
import TopRankItem from "@/components/TopRankItem/index.tsx";
import BottomRankItem from "@/components/BottomRankItem/index.tsx";
import TileContainer from "@/components/common/TileContainer";
import useRankingViewModel from "@/hooks/Ranking/useRankingViewModel";
import type { RankingResponse } from "@/types/ranking";

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

  const { topThree, bottom } = useRankingViewModel(rankingData);

  return (
    <S.Container>
      <TileContainer title="🏆 답변자 랭킹">
        <S.TopRankContainer>
          {topThree.map((item) => (
            <TopRankItem
              key={`${item.ranking}-${item.username}`}
              item={item}
              rankLabel={item.displayRank}
            />
          ))}
        </S.TopRankContainer>
      </TileContainer>

      <S.BottomContainer>
        {bottom.map((item) => (
          <BottomRankItem
            key={`${item.ranking}-${item.username}`}
            item={item}
            rankLabel={item.displayRank}
          />
        ))}
      </S.BottomContainer>
    </S.Container>
  );
}

export default Ranking;
