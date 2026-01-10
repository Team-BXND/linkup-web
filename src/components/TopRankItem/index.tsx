import * as S from './style';
import type {Ranking} from '@/types/ranking';
import {Body,Title} from '../Text';
import RankIcon from '../RankIcon';

function TopRankItem({item}:{item:Ranking}) {


    return(
    <S.RankItemContainer>
        <RankIcon rank={item.rank}/>
        <S.RankItemDetail>

            <S.Rank rank={item.rank}>
            <Body size="md" weight="semibold">{item.rank}st</Body>
            </S.Rank>

            <S.Username rank={item.rank}>
            <Title size="lg" weight="bold">{item.username}</Title>
            </S.Username>

            <Body size="md" weight="medium">{item.point}</Body>
        </S.RankItemDetail>
    </S.RankItemContainer>
    )
}

export default TopRankItem;
