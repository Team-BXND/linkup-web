import styled from 'styled-components';
import Answer from '@/assets/Popular/MessageCircle.svg?react';

export const Container = styled.div`
  width: 100vw;
  max-width: 1416px;

  border-radius: 16px;
  box-shadow: 0px 2px 4px -1px #0c0c0d1a, 0px 2px 4px -1px #0c0c0d0d;

  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 24px;

  overflow-y: auto; /* 스크롤 가능 */

  /* 모든 브라우저에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

export const QuestionsList = styled.div`
  width: 100%;
  max-width: 1352px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

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
  gap: 16px;
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
