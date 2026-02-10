import styled from "styled-components";

interface TileContainer {
  enable?: boolean;
}

export const TileContainer = styled.div<TileContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.background.primary};
  box-shadow: ${(props) => props.theme.shadow.medium};
  border: ${(props) =>
    props.enable ? `0.187rem solid ${props.theme.color.main.mainColor}` : 0};
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
`;
