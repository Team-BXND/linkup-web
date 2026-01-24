import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  border-radius: 1rem;
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
  gap: 1rem;
`;
