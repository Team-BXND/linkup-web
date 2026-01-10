import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.background.secondary};
  padding: 136px 48px 48px 48px;
`