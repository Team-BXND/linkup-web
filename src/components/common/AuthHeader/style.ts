import styled from "styled-components";
import Logo from "@/assets/Logo/Logo.svg?react";
import { Display } from "../Text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledLogo = styled(Logo)`
  width: 5.25rem;
  height: auto;
`;

export const PageTitle = styled(Display)`
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
