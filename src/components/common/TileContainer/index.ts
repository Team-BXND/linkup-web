import styled from "styled-components";

const TileContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.background.primary};
  box-shadow: ${(props) => props.theme.shadow.medium};
`

export default TileContainer;