import InputToken from "@/constants/input.constants";
import styled from "styled-components";

interface InputProps {
  status: 'default' | 'info' | 'success' | 'warn' | 'error' | 'disabled',
  size: 'md' | 'lg'
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.875rem;
  font-size: ${(props) => props.size === 'lg' ? '1.25rem' : '0.625rem'};
  font-weight: 500;
  color: ${(props) => {
    return props.theme.textPrimary
  }};
  border: ${(props) => {
    if (props.status === 'default') {
      return `1px solid ${InputToken(props.theme)[props.status]}`
    }
    return `3px solid ${InputToken(props.theme)[props.status]}`
  }};
  &::placeholder {
    color: ${(props) => {
      return props.theme.textSecondary
    }};
  }
`