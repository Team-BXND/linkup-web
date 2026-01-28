import styled, { css } from "styled-components";
import { TileContainer } from "../common/TileContainer/style";

export const Container = styled(TileContainer)`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0;
  padding: 0.75rem;
`;

export const editorStyle = css`
  background-color: ${({ theme }) => theme.color.background.secondary};
  min-height: 9rem;
  padding: 0.75rem;
`;
