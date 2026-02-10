import styled from "styled-components";

export const Container = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.color.background.primary};
  border: 0.187rem solid ${(props) => props.theme.color.status.warn};
  border-radius: 0.75rem;
  position: absolute;
  top: 0;
  right: 0;
  word-break: keep-all;
  width: 21.8rem;
`;

export const Confirm = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  gap: 0.625rem;
`;
