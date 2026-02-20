import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TopRankSection = styled.div`
  width: 100%;

  gap: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0rem 0.125rem 0.25rem -0.0675rem #0c0c0d1a, 0rem 0.125rem 0.25rem -0.0675rem #0c0c0d0d;
`;

export const TopRankContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 7.5rem;
`;

export const BottomRankSection = styled.div`
  width: 100%;

  gap: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0rem 0.125rem 0.25rem -0.0675rem #0c0c0d1a, 0rem 0.125rem 0.25rem -0.0675rem #0c0c0d0d;
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
    props.enable ? `0.187rem solid ${props.theme.color.main.mainColor}` : 0};
`;