import * as S from "./style";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";
import TopRankItem from "@/components/TopRankItem/index.tsx";
import BottomRankItem from "@/components/BottomRankItem/index.tsx";
import type { Ranking as RankingItem, RankingResponse } from "@/types/ranking";
import TileContainer from "@/components/common/TileContainer";
import { extractData } from "@/utils/apiNormalizer";

function Ranking() {
  const [rankingData, setRankingData] = useState<RankingResponse>({ data: [] });

  useEffect(() => {
    linkupAxios
      .get("/ranking")
      .then((response) => {
        const rawData = extractData<unknown[]>(response.data) ?? [];
        const normalized = rawData
          .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
          .map(
            (item, index): RankingItem => ({
              rank: Number(item.rank ?? index + 1),
              username: String(item.username ?? item.userName ?? item.nickname ?? ""),
              point: Number(item.point ?? item.points ?? 0),
            })
          );
        setRankingData({ data: normalized });
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
