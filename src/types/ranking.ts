export interface Ranking {
  ranking: number;
  username: string;
  point: number;
}

export interface RankingResponse {
  data: Ranking[];
}
