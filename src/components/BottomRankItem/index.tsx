import type { Ranking } from "@/types/ranking";
import { Body, Title } from "../common/Text";
import * as S from "./style";

function BottomRankItem({
  item,
  rankLabel,
}: {
  item: Ranking;
  rankLabel: number;
}) {
  return (
    <S.RankItemContainer>
      <S.Rank>
        <Body size="md" weight="semibold">
          {rankLabel}위
        </Body>
      </S.Rank>

      <Title size="xsm" weight="bold">
        {item.username}
      </Title>

      <Body size="md" weight="medium">
        {item.point}P
      </Body>
    </S.RankItemContainer>
  );
}

export default BottomRankItem;
