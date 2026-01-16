import ButtonToken from "@/constants/button.constants";
import styled from "styled-components";

interface ButtonProps {
  size: "md" | "lg";
  color: "default" | "negative";
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  padding: ${(props) => {
    return ButtonToken(props.theme).padding[props.size];
  }};
  background-color: ${(props) => {
    return ButtonToken(props.theme).color[props.color].background;
  }};
  border: ${(props) => {
    return ButtonToken(props.theme).color[props.color].stroke;
  }};
  color: ${(props) => {
    return ButtonToken(props.theme).color[props.color].text;
  }};
`;
