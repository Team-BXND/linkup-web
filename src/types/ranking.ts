export interface Ranking {
  rank: number;
  displayRank: number;
  rankLabel: string;
  username: string;
  point: number;
}

export interface RankingResponse {
  data: Ranking[];
}
