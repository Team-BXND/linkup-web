import styled from "styled-components";

export const Category = styled.div`
  width:5rem;
  padding: 0.25rem 0.75rem;

  background-color: ${({ theme }) => theme.color.main.mainColor + "1A"};
  border-radius: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.main.mainColor};
`;
