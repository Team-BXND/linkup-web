import styled from "styled-components";

export const Container = styled.div`
  width: 30.3125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const PaginationList = styled.div`
  display: flex;
  width: 17rem;
  gap: 0.5rem;
`;

export const PaginatonButton = styled.div<{ $active: boolean }>`
  display: flex;
  width: 2rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  background: ${({ $active, theme }) =>
    $active ? theme.color.main.mainColor : "none"};
`;

export const PageControlBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.75rem;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.text.secondary};
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  width: 11px;
  height: 11px;
`;
