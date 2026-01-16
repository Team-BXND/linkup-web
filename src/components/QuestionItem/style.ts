import styled from 'styled-components';
import Answer from '@/assets/Popular/MessageCircle.svg?react';

export const Question = styled.div`
  box-sizing: border-box;

  width: 100%;

  border: 1px solid ${({ theme }) => theme.color.line.light};
  border-radius: 12px;

  display: flex;
  align-items: center;
  padding: 24px;
  gap: 20px;

  &:hover {
    outline: 3px solid ${({ theme }) => theme.color.main.mainColor};
  }
`;

export const RankBadge = styled.div`
  min-width: 48px;
  height: 48px;

  background: linear-gradient(225deg, #6b8cff 14.64%, #4a6eff 85.36%);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.background.primary};
`;

export const QuestionContent = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

export const ContentTitle = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.color.text.primary};
`;

export const ContentPreview = styled.div`
  width: 100%;

  & > span {
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const ContentMetaInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 6px;

  & > span {
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const AnswerIcon = styled(Answer)``;