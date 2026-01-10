import * as S from './style';
import { Title } from '../Text';
import { rankingData } from '@/constants/ranking.constants';
import TopRankItem from '../TopRankItem';
import BottomRankItem from '../BottomRankItem';

function Ranking() {
  return (
    <S.Container>
      <S.TopRankContainer>
        <Title size="md" weight="bold">🏆답변자 랭킹</Title>
        <S.TopRankContainer>
          {rankingData.data.slice(0,3).map((item) => (
            <TopRankItem key={item.rank} item={item} />
          ))}</S.TopRankContainer>
      </S.TopRankContainer>
      <S.BottomRankSection>
          {rankingData.data.slice(3).map((item) => (
            <BottomRankItem key={item.rank} item={item} />
          ))}
      </S.BottomRankSection>
    </S.Container>
  );
}

export default Ranking;