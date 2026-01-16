import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 628px;

  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 24px;
  box-shadow: 0px 2px 4px -1px #0c0c0d1a, 0px 2px 4px -1px #0c0c0d0d;
  border-radius: 16px;
`;

export const DetailCover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonCover = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
