import styled from "styled-components";
import ArrowLeft from "@/assets/Pagination/ArrowLeft.svg?react";
import ArrowRight from "@/assets/Pagination/ArrowRight.svg?react";

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ArrowContainer = styled.button<ArrowProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  color: ${(props) =>
    props.disabled
      ? props.theme.color.text.secondary
      : props.theme.color.text.primary};
  * {
    stroke: ${(props) =>
      props.disabled
        ? props.theme.color.text.secondary
        : props.theme.color.text.primary};
  }
`;

interface ArrowProps {
  disabled?: boolean;
}

export const LeftArrow = styled(ArrowLeft)`
  height: 100%;
  width: auto;
`;

export const RightArrow = styled(ArrowRight)`
  height: 100%;
  width: auto;
`;

export const Page = styled.button<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: ${(props) =>
    props.active ? props.theme.color.main.mainColor : "none"};
  color: ${(props) => (props.active ? "#fff" : props.theme.color.text.primary)};
  border: none;
`;
