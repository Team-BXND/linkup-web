import styled from "styled-components";

export const MyQuestionItem = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 12px;
  gap: 12px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.line.light};
  &:hover {
    border-color: ${({ theme }) => theme.color.main.mainColor};
  }
`;
