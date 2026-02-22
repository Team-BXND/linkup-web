import { Title } from "@/components/common/Text";
import TileContainer from "@/components/common/TileContainer";
import styled, { css } from "styled-components";

export const Container = styled(TileContainer)`
  flex: 1;
  min-height: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  gap: 1.5rem;
  min-height: 0;

  & > div:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;

    .quill {
      flex: 1;
      display: flex;
      flex-direction: column-reverse;
      border: 1px solid #e6e6e6;
      border-radius: 0.875rem;
    }

    .ql-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      border: none !important;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.75rem;
`;

export const QuestionIcon = styled(Title)`
  color: ${(props) => props.theme.color.main.mainColor};
`;

export const EditorStyle = css`
  flex: 1;
`;
