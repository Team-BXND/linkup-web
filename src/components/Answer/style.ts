import styled from "styled-components";
import { Title } from "../common/Text";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const TitleArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;

export const AnswerIcon = styled(Title)`
  color: #ff6060;
`;

export const MetaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
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

export const ButtonWrapper = styled.div`
  position: relative;
`;
