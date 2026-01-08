import styled from 'styled-components';
import Answer from '@/assets/Popular/MessageCircle.svg?react';

export const Question = styled.div`
  box-sizing: border-box;

  width: 100%;
  max-width: 1352px;

  border: 1px solid ${({ theme }) => theme.lineLight};
  border-radius: 12px;

  display: flex;
  align-items: center;
  padding: 24px;
  gap: 20px;

  &:hover {
    outline: 3px solid ${({ theme }) => theme.mainColor};
  }
`;

export const RankBadge = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;

  background: linear-gradient(225deg, #6b8cff 14.64%, #4a6eff 85.36%);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  color: ${({ theme }) => theme.bgPrimary};
`;

export const QuestionContent = styled.div`
  width: 100vw;
  max-width: 1236px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

export const ContentTitle = styled.div`
  width: 100%;
  max-width: 1236px;
  min-height: 29px;

  color: ${({ theme }) => theme.textPrimary};
`;

export const ContentPreview = styled.div`
  width: 100vw;
  max-width: 1236px;
  min-height: 21px;

  & > span {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const ContentMetaInfo = styled.div`
  width: 100vw;
  max-width: 1236px;
  min-height: 17px;

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
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const AnswerIcon = styled(Answer)``;