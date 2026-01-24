import styled from "styled-components";

interface RankProps {
  rank: number;
}

export const RankIcon = styled.img<RankProps>`
  width: ${({ rank }) => (rank === 1 ? "6.25rem" : "5rem")};
  height: ${({ rank }) => (rank === 1 ? "6.25rem" : "5rem")};
  object-fit: cover;
`;
