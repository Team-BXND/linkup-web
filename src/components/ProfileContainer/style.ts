import styled from "styled-components";

export const TitleCover = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const InDetail = styled.div`
  color: ${({ theme }) => theme.color.main.mainColor};
`;
