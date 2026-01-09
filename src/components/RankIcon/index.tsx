import * as S from './style';

function RankIcon({ rank }: { rank: number }) {
    let iconSrc = '';
    
    if (rank === 1) {
        iconSrc = '@/assets/rank/firstrank.png';
    } else if (rank === 2) {
        iconSrc = '@/assets/icons/secondrank.png';
    } else if (rank === 3) {
        iconSrc = '@/assets/icons/thirdrank.png';
    } 
    return <S.RankIcon src={iconSrc} rank={rank} />;
}

export default RankIcon;