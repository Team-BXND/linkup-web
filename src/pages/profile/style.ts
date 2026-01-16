import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;
`;

export const LeftColumn = styled.div`
  width: 100vw;
  max-width: 692px;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RightColumn = styled.div`
  width: 100vw;
  max-width: 692px;

  flex: 2;
  overflow-y: auto;
`;
