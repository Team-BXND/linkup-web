import * as S from "./style";
import { Title } from "@/components/common/Text";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";
import TopRankItem from "@/components/TopRankItem/index.tsx";
import BottomRankItem from "@/components/BottomRankItem/index.tsx";
import type { RankingResponse } from "@/types/ranking";

function Ranking() {
  const [rankingData, setRankingData] = useState<RankingResponse>({ data: [] });

  useEffect(() => {
    linkupAxios
      .get("/ranking")
      .then((response) => {
        setRankingData(response.data);
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
      <S.TopRankSection>
        <Title size="md" weight="bold">
          🏆 답변자 랭킹
        </Title>
        <S.TopRankContainer>
          {topThree.map((item) => (
            <TopRankItem key={item.rank} item={item} />
          ))}
        </S.TopRankContainer>
      </S.TopRankSection>

      <S.BottomRankSection>
        {rankingData.data.slice(3).map((item) => (
          <BottomRankItem key={item.rank} item={item} />
        ))}
      </S.BottomRankSection>
    </S.Container>
  );
}

export default Ranking;
