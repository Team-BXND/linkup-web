import styled from "styled-components";

export const MyAnswerItem = styled.div`
  width: 100%;
  box-sizing: border-box;

  padding: 0rem 0rem 1rem 0rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 0.75rem;
  border: 0.0675rem solid ${({ theme }) => theme.color.line.light};
  &:hover {
    border-color: ${({ theme }) => theme.color.main.mainColor};
  }
`;

export const QuestionCover = styled.div`
  width: 100%;

  padding: 0.75rem 0.75rem;
  gap: 0.75rem;
  display: flex;
  align-items: center;
  border-bottom: 0.0675rem solid
    ${({ theme }) => theme.color.text.secondary + "33"};
`;

export const QuestionTitle = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const PreviewIcon = styled.span`
  margin-left: 1rem;
  margin-right: 0.5rem;
`;
