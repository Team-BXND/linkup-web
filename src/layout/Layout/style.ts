import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.background.secondary};
  padding: 8.5rem 3rem 3rem 3rem;

  @media (max-width: 786px) {
    padding: 11rem 1rem;
  }
`;
