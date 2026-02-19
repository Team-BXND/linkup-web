import type { RankingResponse } from "@/types/ranking.ts";
import { buildRanking } from "./buildRanking.ts";

/**
 * TopRanking 영역에서 보여줄 순서
 * - UI 상에서 2등 → 1등 → 3등 순으로 배치하기 위함
 */
const podiumOrder = [2, 1, 3];

/**
 * 랭킹 화면에서 사용할 데이터를 가공하는 ViewModel 훅
 *
 * - buildRanking을 통해 전체 랭킹을 계산
 * - TopRanking 영역은 rank 1~3 중에서 podiumOrder(2,1,3) 순서로 재배치
 * - Bottom 영역은 rank 4 이상 유저를 그대로 사용
 *
 * @param rankingData 서버에서 내려온 랭킹 응답 데이터
 * @returns {{
 *  topThree: 랭킹 상위 3명 (정렬 순서: 2 → 1 → 3),
 *  bottom: 랭킹 4등 이하 유저 목록
 * }}
 *
 * @example
 * const { topThree, bottom } = useRankingViewModel(rankingData);
 */
function useRankingViewModel(rankingData: RankingResponse) {
  // 전체 랭킹 계산 (포인트 정책, 공동 순위 등은 buildRanking에서 처리)
  const ranked = buildRanking(rankingData.data);

  // rank 1~3에 해당하는 TopRanking 후보
  const topThreeRaw = ranked.filter((item) => item.rank <= 3);

  // 정렬을 위한 순서 재배치 (2 → 1 → 3)
  const topThree = podiumOrder
    .map((rank) => topThreeRaw.find((item) => item.rank === rank))
    .filter(
      (item): item is (typeof topThreeRaw)[number] => Boolean(item)
    );

  // 나머지 랭킹 (4등 이하)
  const bottom = ranked.filter((item) => item.rank > 3);

  return { topThree, bottom };
}

export default useRankingViewModel;