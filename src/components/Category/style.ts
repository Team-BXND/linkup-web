import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.25rem;
  gap: 0.25rem;
`;

export const Element = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 1000rem;
  background-color: ${(props) =>
    props.active ? props.theme.color.main.subColor : "#A5A5A5"};
  color: #fff;
  cursor: pointer;
`;
