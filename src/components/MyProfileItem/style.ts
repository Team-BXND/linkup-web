import styled from "styled-components";

export const MyProfileItem = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const Content = styled.div<{ subtitle: string }>`
  color: ${({ subtitle, theme }) =>
    subtitle == "답변자 순위" || subtitle == "포인트"
      ? theme.color.main.mainColor
      : theme.color.text.primary};
`;
