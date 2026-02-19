import type { RankingResponse } from "@/types/ranking.ts";
import { buildRanking } from "./buildRanking.ts";

const podiumOrder = [2, 1, 3];

function useRankingViewModel(rankingData: RankingResponse) {
  const ranked = buildRanking(rankingData.data);

  const topThreeRaw = ranked.filter((item) => item.rank <= 3);

  const topThree = podiumOrder
    .map((rank) => topThreeRaw.find((item) => item.rank === rank))
    .filter((item): item is (typeof topThreeRaw)[number] => Boolean(item));

  const bottom = ranked.filter((item) => item.rank > 3);

  return { topThree, bottom };
}

export default useRankingViewModel;
