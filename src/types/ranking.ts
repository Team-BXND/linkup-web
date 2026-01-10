export interface Ranking {
    rank: number;
    username: string;
    point: number;
}

export interface RankingResponse {
    data: Ranking[];
}