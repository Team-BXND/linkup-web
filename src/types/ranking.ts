export interface Ranking {
  ranking: number;
  username: string;
  point: number;
}

type RankedItem = Ranking & {
  rank: number;
  displayRank: number;
};

export interface RankingResponse {
  data: Ranking[];
}
