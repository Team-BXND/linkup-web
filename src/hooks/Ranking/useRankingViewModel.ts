import type { RankingResponse } from "@/types/ranking";

/**
 * 랭킹 화면에서 사용할 데이터를 가공하는 ViewModel 훅
 *
 * 서버에서 내려온 랭킹 데이터를 그대로 사용해
 * 상위 3명(TopRanking)과 나머지 유저(BottomRanking)를 분리한다.
 *
 * 처리 흐름
 * 1. 응답 데이터 기준 상위 3명을 TopRanking으로 분리
 * 2. 나머지 유저를 BottomRanking으로 분리
 *
 * @param rankingData
 * 서버에서 내려온 랭킹 응답 데이터
 *
 * @returns {{
 *  topThree: RankingResponse["data"],
 *  bottom: RankingResponse["data"]
 * }}
 * 랭킹 화면에서 사용할 Top / Bottom 영역 데이터
 *
 * @example
 * const { topThree, bottom } = useRankingViewModel(rankingData);
 */
function useRankingViewModel(rankingData: RankingResponse) {
  const topThree = rankingData.data.slice(0, 3);
  const bottom = rankingData.data.slice(3);

  return { topThree, bottom };
}

export default useRankingViewModel;
