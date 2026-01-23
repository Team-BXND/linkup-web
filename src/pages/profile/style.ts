import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 32px;
`;

export const LeftColumn = styled.div`
  width: 100%;
  height: 50%;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RightColumn = styled.div`
  width: 100%;
  height: 110%;
  
  flex: 1;
  overflow-y: auto;
`;
