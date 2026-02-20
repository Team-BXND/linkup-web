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
 * 1. 포인트가 있는 계정만 랭킹을 비교
 * 2. 포인트 기준 내림차순으로 정렬
 *3. 포인트가 동일한 계정은 동일한 순위(공동 순위, competition ranking)를 갖고,
 *    다음 순위는 "이전 순위 + 동일 포인트 계정 수"만큼 건너뛴 값이 됨
 *4. 포인트가 0인 계정은 랭킹 비교에서 제외하고, 포인트가 있는 계정들 뒤에서부터
 *    등록 순서대로 순위를 부여
 *
 * @param data 서버에서 내려온 원본 랭킹 데이터 배열
 * @returns 랭킹이 처리된 RankedItem 배열
 *
 * @example
 * const ranked = buildRanking(rankingData.data);
 * ranked[0].rank        // 1
 * ranked[0].displayRank // 1
 */
export function buildRanking(data: RankingResponse["data"]): RankedItem[] {
  // 포인트가 있는 유저 (랭킹 경쟁 대상)
  const withPoint = data.filter((item) => Number(item.point) > 0);

  // 포인트가 없는 유저 (등록 순서 유지)
  const withoutPoint = data.filter((item) => Number(item.point) === 0);

  // 포인트 기준 내림차순 정렬
  const sortedWithPoint = withPoint
    .slice()
    .sort((a, b) => Number(b.point) - Number(a.point));

  let currentRank = 1;

  // 포인트가 있는 유저 랭킹 계산 (공동 순위 처리)
  const rankedWithPoint: RankedItem[] = sortedWithPoint.map((item, index) => {
    // 이전 유저보다 포인트가 낮아지는 시점에만 rank 증가
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

  // 포인트 없는 유저는 랭킹 계산 이후의 다음 순위부터 부여
  const startRank = rankedWithPoint.length + 1;

  const rankedWithoutPoint: RankedItem[] = withoutPoint.map((item, index) => ({
    ...item,
    rank: startRank + index,
    displayRank: startRank + index,
  }));

  // 랭킹 계산된 유저 + 포인트 없는 유저 합치기
  return [...rankedWithPoint, ...rankedWithoutPoint];
}
