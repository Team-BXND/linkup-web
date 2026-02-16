import styled from "styled-components";

export const MyQuestionItem = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0.75rem;

  justify-content: space-between;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.line.light};
  &:hover {
    border-color: ${({ theme }) => theme.color.main.mainColor};
  }
`;

export const QuestionContent = styled.div`
  gap: 0.75rem;
`;
