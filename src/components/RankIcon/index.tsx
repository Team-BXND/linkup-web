import * as S from "./style";
import firstrank from "../../assets/Ranking/firstrank.png";
import secondrank from "../../assets/Ranking/secondrank.png";
import thirdrank from "../../assets/Ranking/thirdrank.png";

function RankIcon({ rank }: { rank: number }) {
  let iconSrc = "";

  switch (rank) {
    case 1:
      iconSrc = firstrank;
      break;
    case 2:
      iconSrc = secondrank;
      break;
    case 3:
      iconSrc = thirdrank;
      break;
    default:
      iconSrc = "";
  }
  return <S.RankIcon src={iconSrc} rank={rank} />;
}

export default RankIcon;
