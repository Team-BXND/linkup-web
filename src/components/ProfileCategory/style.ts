import styled from "styled-components";

export const Category = styled.div`
  width: 5rem;
  padding: 0.4rem 0.5rem;

  background-color: ${({ theme }) => theme.color.main.mainColor + "1A"};
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.main.mainColor};
`;
