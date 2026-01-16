import styled from "styled-components";

export const Category = styled.div`
  padding: 4px 12px;

  background-color: ${({ theme }) => theme.color.main.mainColor + "1A"};
  border-radius: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.main.mainColor};
`;
