import styled from "styled-components";

export const RankItemContainer = styled.div`
  width: 100%;
  max-width: 1352px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 8px;
  align-items: center;
`;

export const Rank = styled.div`
  color: ${({ theme }) => theme.color.main.mainColor};
`;
