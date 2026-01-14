import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;
  height: calc(100vh - 80px);
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;   
`;

export const RightColumn = styled.div`
  flex: 2;
  height: 100%;
  overflow-y: auto; 
`;