import styled, { createGlobalStyle, type RuleSet } from "styled-components";

export const QuillStyle = createGlobalStyle<{ style?: RuleSet }>`
  .ql-editor {
    ${(props) => props.style};
    font-size: ${(props) => props.theme.typography.fontSize.body.md};
    line-height: 1.5;
  }

  .ql-editor.ql-blank::before {
    color: ${(props) => props.theme.color.text.secondary};
    font-style: normal;
    font-size: ${(props) => props.theme.typography.fontSize.body.md};
  }

  .ql-editor p {
    font-size: ${(props) => props.theme.typography.fontSize.body.md};
    font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  }

  .ql-editor h1 {
    font-size: ${(props) => props.theme.typography.fontSize.title.lg};
    font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  }

  .ql-editor h2 {
    font-size: ${(props) => props.theme.typography.fontSize.title.md};
    font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  }

  .ql-editor h3 {
    font-size: ${(props) => props.theme.typography.fontSize.title.sm};
    font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  }

  .ql-editor strong {
    font-weight: bold;
  }

  .ql-editor em {
    font-style: italic;
  }

  .ql-container {
    border: none !important;
  }

  .quill {
    display: flex;
    flex-direction: column-reverse;
  }

  .ql-toolbar {
    display: flex;
    gap: 0.5rem;
    padding: 0 !important;
    padding-bottom: 0 !important;
    border: none !important;
  }

  .ql-toolbar button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    padding: 0 !important;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
    background-color: #00000000;
  }

  .ql-toolbar button:hover {
    background-color: ${({ theme }) => theme.color.background?.secondary};
  }

  .ql-toolbar button svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: ${({ theme }) => theme.color.text.secondary};
    stroke: ${({ theme }) => theme.color.text.secondary};
    pointer-events: none;
  }

  .ql-toolbar button:hover svg {
    fill: ${({ theme }) => theme.color.main.mainColor};
    stroke: ${({ theme }) => theme.color.main.mainColor};
  }

  .ql-toolbar button.ql-active svg {
    fill: ${({ theme }) => theme.color.main.mainColor};
    stroke: ${({ theme }) => theme.color.main.mainColor};
    stroke-width: 0.1rem;
  }

  img {
    max-width: 40rem !important;
  }
`;

export const QuillWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;

export const ToolbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
