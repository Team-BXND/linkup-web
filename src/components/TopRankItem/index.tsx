import * as S from "./style";
import type { Ranking } from "@/types/ranking";
import { Body, Title } from "../common/Text";
import RankIcon from "../RankIcon";

function TopRankItem({
  item,
  rankLabel,
}: {
  item: Ranking;
  rankLabel: number;
}) {
  return (
    <S.RankItemContainer>
      <RankIcon rank={rankLabel} />
      <S.RankItemDetail>
        <S.Rank rank={rankLabel}>
          <Body size="md" weight="semibold">
            {rankLabel}st
          </Body>
        </S.Rank>

        <S.Username rank={rankLabel}>
          <Title size={rankLabel === 1 ? "lg" : "md"} weight="bold">
            {item.username}
          </Title>
        </S.Username>

        <Body size="md" weight="medium">
          포인트 {item.point}점
        </Body>
      </S.RankItemDetail>
    </S.RankItemContainer>
  );
}

export default TopRankItem;
