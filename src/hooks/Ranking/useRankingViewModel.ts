import type { RankingResponse } from "@/types/ranking";
import { buildRanking } from "./buildRanking";

/**
 * 랭킹 화면에서 사용할 데이터를 가공하는 ViewModel 훅
 *
 * 서버에서 내려온 랭킹 데이터를 기반으로 전체 랭킹을 계산한 뒤,
 * 상위 3명(TopRanking)과 나머지 유저(BottomRanking)를 분리한다.
 *
 * 처리 흐름
 * 1. buildRanking을 통해 포인트 정렬 및 공동 순위 계산
 * 2. 정렬된 결과 기준 상위 3명을 TopRanking으로 확정
 * 3. TopRanking은 UI 연출을 위해 표시 순서를 재배치
 * 4. TopRanking에 포함되지 않은 유저는 Bottom 영역으로 분리
 *
 * @param rankingData
 * 서버에서 내려온 랭킹 응답 데이터
 *
 * @returns {{
 *  topThree: Array<{
 *    username: string;
 *    point: number;
 *    rank: number;
 *    displayRank: number;
 *    uiPosition: number;
 *  }>,
 *  bottom: Array<{
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
 * // TopRanking 영역
 * // 정렬된 상위 3명 기준 UI 표시 순서: 2등 → 1등 → 3등
 *
 * // Bottom 영역
 * // TopRanking에 포함되지 않은 나머지 유저 목록
 */
function useRankingViewModel(rankingData: RankingResponse) {
  /**
   * 전체 랭킹 계산
   *
   * - 포인트 내림차순 정렬
   * - 공동 순위(rank, displayRank) 계산
   * - 세부 로직은 buildRanking에서 처리
   */
  const ranked = buildRanking(rankingData.data);

  /**
   * TopRanking 기준 데이터
   *
   * - 정렬된 결과 기준 상위 3명 확정
   * - UI 재배치 이전의 원본 순서 유지
   */
  const topThreeBase = ranked.slice(0, 3);

  /**
   * TopRanking UI 표시 순서 정의
   *
   * - 정렬된 상위 3명 [0, 1, 2] 기준
   * - UI 상에서 2등 → 1등 → 3등 순으로 배치하기 위함
   * - 배열 값은 topThreeBase의 index를 의미
   */
  const podiumOrder = [1, 0, 2];

  /**
   * TopRanking UI 표시 데이터
   *
   * - podiumOrder 기준으로 표시 순서 재배치
   * - uiPosition은 아이콘, 스타일링 등 UI 전용 값
   */
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
   * - username 기준으로 필터링하여
   *   TopRanking 중복 렌더링을 방지
   */
  const topUsernameSet = new Set(
    topThreeBase.map((item) => item.username)
  );

  const bottom = ranked.filter(
    (item) => !topUsernameSet.has(item.username)
  );

  return { topThree, bottom };
}

export default useRankingViewModel;