import * as S from './style';
import { Title } from '../Text';
import { rankingData } from '@/constants/ranking.constants';
import TopRankItem from '../TopRankItem';
import BottomRankItem from '../BottomRankItem';

function RankingComponent() {

  const podiumOrder = [2, 1, 3];

  const topThree = rankingData.data
    .slice(0, 3)
    .sort(
      (a, b) =>
        podiumOrder.indexOf(a.rank) -
        podiumOrder.indexOf(b.rank)
    );

  return (
    <S.Container>

      <S.TopRankSection>
        <Title size="md" weight="bold">🏆 답변자 랭킹</Title>
        <S.TopRankContainer>
          {topThree.map((item) => (
            <TopRankItem key={item.rank} item={item} />
          ))}</S.TopRankContainer>
      </S.TopRankSection>

      <S.BottomRankSection>
          {rankingData.data.slice(3).map((item) => (
            <BottomRankItem key={item.rank} item={item} />
          ))}
      </S.BottomRankSection>

    </S.Container>
  );
}

export default RankingComponent;