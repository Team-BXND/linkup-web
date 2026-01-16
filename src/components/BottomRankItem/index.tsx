import type { Ranking } from "@/types/ranking";
import { Body, Title } from "../Text";
import * as S from "./style";

function BottomRankItem({ item }: { item: Ranking }) {
  return (
    <S.RankItemContainer>
      <S.Rank>
        <Body size="md" weight="semibold">
          {item.rank}등
        </Body>
      </S.Rank>
      <Title size="xsm" weight="bold">
        {item.username}
      </Title>
      <Body size="md" weight="medium">
        {item.point}p
      </Body>
    </S.RankItemContainer>
  );
}

export default BottomRankItem;
