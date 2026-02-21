import type { RankingResponse } from "@/types/ranking";

/**
 * 랭킹 결과를 포함하는 타입
 *
 * @property rank        실제 랭킹 계산에 사용되는 순위
 * @property displayRank 화면에 표시할 순위 값
 */
type RankedItem = RankingResponse["data"][number] & {
  rank: number;
  displayRank: number;
};

/**
 * 랭킹 데이터를 가공하는 함수
 *
 * - 포인트 기준 경쟁 랭킹 계산 (공동 순위 허용)
 * - 포인트가 0인 유저는 랭킹 뒤에 등록 순서대로 배치
 *
 * @param data 서버에서 내려온 원본 랭킹 데이터 배열
 */
export function buildRanking(data: RankingResponse["data"]): RankedItem[] {
  /** 포인트가 있는 유저 */
  const withPoint = data.filter((item) => Number(item.point) > 0);

  /** 포인트가 없는 유저 */
  const withoutPoint = data.filter((item) => Number(item.point) === 0);

  /** 포인트 기준 내림차순 정렬 */
  const sortedWithPoint = [...withPoint].sort(
    (a, b) => Number(b.point) - Number(a.point)
  );

  let currentRank = 1;

  /** 포인트 보유 유저 랭킹 계산 (competition ranking) */
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

  /** 포인트 없는 유저는 랭킹 뒤에서부터 순차 부여 */
  const startRank = rankedWithPoint.length + 1;

  const rankedWithoutPoint: RankedItem[] = withoutPoint.map((item, index) => ({
    ...item,
    rank: startRank + index,
    displayRank: startRank + index,
  }));

  return [...rankedWithPoint, ...rankedWithoutPoint];
}
