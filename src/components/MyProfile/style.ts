import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
  box-shadow: 0rem 0.125rem 0.25rem -0.0675rem #0c0c0d1a,
    0rem 0.125rem 0.25rem -0.0675rem #0c0c0d0d;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.background.primary};
`;

export const DetailCover = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonCover = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
