import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 2rem;
`;

export const LeftColumn = styled.div`
  width: 100%;
  height: 50%;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RightColumn = styled.div`
  width: 100%;
  height: 100%;

  flex: 1;
`;
