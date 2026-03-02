import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TopRankContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.25fr 1fr;
  align-items: end;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap:2rem;
  }
`;

interface BottomContainerProps {
  enable?: boolean;
}

export const BottomContainer = styled.div<BottomContainerProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.background.primary};
  box-shadow: ${(props) => props.theme.shadow.medium};
  border: ${(props) =>
    props.enable
      ? `0.187rem solid ${props.theme.color.main.mainColor}`
      : "none"};
`;
