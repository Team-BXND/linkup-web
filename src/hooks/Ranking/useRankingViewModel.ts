import { buildRanking } from "./buildRanking";

/**
 * 랭킹 관련 데이터를 가공하는 ViewModel 훅
 *
 * 서버에서 내려온 랭킹 데이터를 기반으로 전체 랭킹을 계산한 뒤,
 * 랭킹 화면과 프로필 화면에서 공통으로 사용할 데이터를 제공
 *
 * 처리 흐름
 * 1. buildRanking을 통해 포인트 정렬 및 공동 순위 계산
 * 2. 전체 랭킹 결과를 기반으로 Top / Bottom 영역 분리
 * 3. 특정 유저(username)의 랭킹 정보(myRank) 추출
 *
 * @param rankingData
 * 서버에서 내려온 랭킹 응답 데이터
 *
 * @param myUsername
 * 프로필 화면에서 사용할 현재 로그인 유저의 username
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
 *  }>,
 *  myRank?: {
 *    username: string;
 *    point: number;
 *    rank: number;
 *    displayRank: number;
 *  }
 * }}
 *
 * @example
 * // 랭킹 화면
 * const { topThree, bottom } = useRankingViewModel(rankingData);
 *
 * @example
 * // 프로필 화면
 * const { myRank } = useRankingViewModel(rankingData, myUsername);
 */
import type { Ranking } from "@/types/ranking";

function useRankingViewModel(
  rankingData: Ranking[],
  myUsername?: string
) {
  /**
   * 전체 랭킹 계산 결과
   *
   * - 포인트 내림차순 정렬
   * - 공동 순위 처리 (rank, displayRank)
   * - 상세 계산 로직은 buildRanking에서 수행
   */
  const ranked = buildRanking(rankingData);

  /**
   * TopRanking 기준 데이터
   *
   * - 정렬된 전체 랭킹 기준 상위 3명 확정
   * - UI 재배치 이전의 원본 순서 유지
   */
  const topThreeBase = ranked.slice(0, 3);

  /**
   * TopRanking UI 표시 순서 정의
   *
   * - UI 상에서 2등 → 1등 → 3등 순으로 배치
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
   * TopRanking 유저 식별 집합
   *
   * - Bottom 영역에서 TopRanking 중복 렌더링을 방지하기 위함
   */
  const topUsernameSet = new Set(
    topThreeBase.map((item) => item.username)
  );

  /**
   * Bottom 영역 데이터
   *
   * - 전체 랭킹 중 TopRanking에 포함되지 않은 유저 목록
   */
  const bottom = ranked.filter(
    (item) => !topUsernameSet.has(item.username)
  );

  /**
   * 내 랭킹 정보 (프로필 화면용)
   *
   * - 전체 랭킹 결과에서 username 기준으로 검색
   * - myUsername이 없을 경우 undefined 반환
   */
  const myRank = myUsername
    ? ranked.find((item) => item.username === myUsername)
    : undefined;

  return {
    topThree,
    bottom,
    myRank,
  };
}

export default useRankingViewModel;