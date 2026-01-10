import * as S from './style';
import firstrank from '../../assets/Ranking/firstrank.png';
import secondrank from '../../assets/Ranking/secondrank.png';
import thirdrank from '../../assets/Ranking/thirdrank.png';

function RankIcon({ rank }: { rank: number }) {
    let iconSrc = '';
    
    if (rank === 1) {
        iconSrc = firstrank;
    } else if (rank === 2) {
        iconSrc = secondrank;;
    } else if (rank === 3) {
        iconSrc = thirdrank
    } 
    return <S.RankIcon src={iconSrc} rank={rank} />;
}

export default RankIcon;