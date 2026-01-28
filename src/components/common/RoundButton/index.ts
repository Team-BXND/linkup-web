import ButtonToken from "@/constants/button.constants";
import styled from "styled-components";

interface ButtonProps {
  size: "md" | "lg";
  color: "default" | "negative";
}

const RoundButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000rem;
  cursor: pointer;
  width: ${(props) => {
    return ButtonToken(props.theme).width[props.size];
  }};
  height: ${(props) => {
    return ButtonToken(props.theme).width[props.size];
  }};
  background-color: ${(props) => {
    return ButtonToken(props.theme).color[props.color].background;
  }};
  border: ${(props) => {
    return ButtonToken(props.theme).color[props.color].stroke;
  }};
  * {
    stroke: ${(props) => {
      return ButtonToken(props.theme).color[props.color].text;
    }};
  }
`;

export default RoundButton;
