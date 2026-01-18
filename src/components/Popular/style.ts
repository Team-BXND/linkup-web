import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.color.background.primary};
  box-shadow: 0px 2px 4px -1px #0c0c0d1a, 0px 2px 4px -1px #0c0c0d0d;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 24px;
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const QuestionsList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;
