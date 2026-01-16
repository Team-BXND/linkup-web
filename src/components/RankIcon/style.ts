import styled from "styled-components";

interface RankProps {
  rank: number;
}

export const RankIcon = styled.img<RankProps>`
  width: ${({ rank }) => (rank === 1 ? "100px" : "80px")};
  height: ${({ rank }) => (rank === 1 ? "100px" : "80px")};
  object-fit: cover;
`;
