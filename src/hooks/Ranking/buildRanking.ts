import type { RankingResponse } from "@/types/ranking";

type RankedItem = RankingResponse["data"][number] & {
  rank: number;
  displayRank: number;
};

export function buildRanking(data: RankingResponse["data"]): RankedItem[] {
  const withPoint = data.filter((item) => Number(item.point) > 0);

  const withoutPoint = data.filter((item) => Number(item.point) === 0);

  const sortedWithPoint = withPoint
    .slice()
    .sort((a, b) => Number(b.point) - Number(a.point));

  let currentRank = 1;

  const rankedWithPoint: RankedItem[] = sortedWithPoint.map((item, index) => {
    if (
      index > 0 &&
      Number(item.point) < Number(sortedWithPoint[index - 1].point)
    ) {
      currentRank = index + 1;
    }

    return {
      ...item,
      rank: currentRank,
      displayRank: currentRank,
    };
  });

  const startRank = rankedWithPoint.length + 1;

  const rankedWithoutPoint: RankedItem[] = withoutPoint.map((item, index) => ({
    ...item,
    rank: startRank + index,
    displayRank: startRank + index,
  }));

  return [...rankedWithPoint, ...rankedWithoutPoint];
}
