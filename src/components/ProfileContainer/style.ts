import styled from "styled-components";

export const ProfileContainer = styled.div<{ height: string }>`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  max-height: ${({ height }) => height};

  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 24px;
  box-shadow: 0px 2px 4px -1px #0c0c0d1a, 0px 2px 4px -1px #0c0c0d0d;
  border-radius: 16px;
`;

export const TitleCover = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const InDetail = styled.div`
  color: ${({ theme }) => theme.color.main.mainColor};
`;
