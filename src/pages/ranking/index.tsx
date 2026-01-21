import * as S from "./style";
import { Title } from "@/components/common/Text";
import { rankingData } from "@/constants/ranking.constants";
import TopRankItem from "@/components/TopRankItem/index.tsx";
import BottomRankItem from "@/components/BottomRankItem/index.tsx";
import TileContainer from "@/components/common/TileContainer";

function Ranking() {
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
