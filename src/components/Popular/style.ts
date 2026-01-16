import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1416px;
  max-height: 464px;

  background: ${({ theme }) => theme.color.background.primary};
  box-shadow: 0px 2px 4px -1px #0c0c0d1a, 0px 2px 4px -1px #0c0c0d0d;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
`;
