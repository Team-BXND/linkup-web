import styled from "styled-components";

export const RankItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 8px;
  align-items: center;
`;

export const Rank = styled.div`
  color: ${({ theme }) => theme.color.main.mainColor};
`;
