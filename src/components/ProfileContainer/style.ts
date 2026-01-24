import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
  box-shadow: 0rem 0.125rem 0.25rem -0.0675rem #0c0c0d1a, 0rem 0.125rem 0.25rem -0.0675rem #0c0c0d0d;
  border-radius: 1rem;
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
