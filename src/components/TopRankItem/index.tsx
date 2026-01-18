import * as S from "./style";
import type { Ranking } from "@/types/ranking";
import { Body, Title } from "../common/Text";
import RankIcon from "../RankIcon";

function TopRankItem({ item }: { item: Ranking }) {
  return (
    <S.RankItemContainer>
      <RankIcon rank={item.rank} />
      <S.RankItemDetail>
        <S.Rank rank={item.rank}>
          <Body size="md" weight="semibold">
            {item.rank}위
          </Body>
        </S.Rank>

        <S.Username rank={item.rank}>
          <Title size={item.rank === 1 ? "lg" : "md"} weight="bold">
            {item.username}
          </Title>
        </S.Username>

        <Body size="md" weight="medium">
          포인트{item.point}점
        </Body>
      </S.RankItemDetail>
    </S.RankItemContainer>
  );
}

export default TopRankItem;
