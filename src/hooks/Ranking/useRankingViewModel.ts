import type { RankingResponse } from "@/types/ranking";
import { buildRanking } from "./buildRanking";

/**
 * 랭킹 화면에서 사용할 데이터를 가공하는 ViewModel 훅
 *
 * 서버에서 내려온 랭킹 데이터를 기반으로 전체 랭킹을 계산한 뒤,
 * 상위 3명(TopRanking)과 그 외 유저(BottomRanking)를 분리한다.
 *
 * - 랭킹 계산 및 공동 순위 처리는 buildRanking에서 수행
 * - 정렬된 결과 기준 상위 3명을 TopRanking으로 확정
 * - TopRanking은 UI 연출을 위해 표시 순서를 재배치
 * - TopRanking에 포함되지 않은 유저는 Bottom 영역으로 분리
 *
 * @param rankingData
 * 서버에서 내려온 랭킹 응답 데이터
 *
 * @returns {{
 *  topThree: Array<{
 *    id: number;
 *    username: string;
 *    point: number;
 *    rank: number;
 *    displayRank: number;
 *    uiPosition: number;
 *  }>,
 *  bottom: Array<{
 *    id: number;
 *    username: string;
 *    point: number;
 *    rank: number;
 *    displayRank: number;
 *  }>
 * }}
 * 랭킹 화면에서 사용할 Top / Bottom 영역 데이터
 *
 * @example
 * const { topThree, bottom } = useRankingViewModel(rankingData);
 *
 * // TopRanking 영역 (UI 표시 순서: 2 → 1 → 3)
 * // topThree[0].uiPosition === 0
 *
 * // Bottom 영역
 * // TopRanking에 포함되지 않은 나머지 유저 목록
 */
function useRankingViewModel(rankingData: RankingResponse) {
  /**
   * 전체 랭킹 계산
   * - 포인트 정렬 및 공동 순위 처리는 buildRanking에서 수행
   */
  const ranked = buildRanking(rankingData.data);

  /**
   * TopRanking 기준 데이터
   * - 정렬된 결과 기준 상위 3명 확정
   */
  const topThreeBase = ranked.slice(0, 3);

  /**
   * TopRanking UI 표시 데이터
   *
   * - UI 상에서 2 → 1 → 3 순서로 배치
   * - uiPosition은 아이콘 / 스타일링 전용 값
   */
  const podiumOrder = [1, 0, 2];

  const topThree = podiumOrder
    .map((index) => topThreeBase[index])
    .filter(Boolean)
    .map((item, uiPosition) => ({
      ...item,
      uiPosition,
    }));

  /**
   * Bottom 영역 데이터
   *
   * - TopRanking에 포함되지 않은 나머지 유저
   * - 고유 식별자(id) 기준으로 필터링하여
   *   동명이인으로 인한 잘못된 제외를 방지
   */
  const topUserIdSet = new Set(
    topThreeBase.map((item) => item.username)
  );

  const bottom = ranked.filter(
    (item) => !topUserIdSet.has(item.username)
  );

  return { topThree, bottom };
}

export default useRankingViewModel;