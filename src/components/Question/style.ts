import styled from "styled-components";
import { Body, Title } from "../common/Text";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const TitleArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.625rem;
`;

export const QuestionIcon = styled(Title)`
  color: ${(props) => props.theme.color.main.mainColor};
`;

export const MetaContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  * {
    color: ${(props) => props.theme.color.text.secondary};
  }
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Toolbar = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: right;
  gap: 0.625rem;
`;

export const ContentsArea = styled(Body)`
  line-height: 2rem;
`;
