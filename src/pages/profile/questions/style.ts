import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 32px;

  border-radius: 16px;
  background-color: ${(props) => props.theme.color.background.primary};
  box-shadow: ${(props) => props.theme.shadow.medium};
`;

export const TextCover = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
`

export const ScrollArea = styled.div`
  width: 100%;
  flex: 1;

  overflow-y: auto;
  min-height: 0;
`;

export const DetailCover = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;
