import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Caption } from "@/components/common/Text";
import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  width: 31.25rem;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AuthButton = styled(Button)`
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const AuthInput = styled(Input)`
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ErrorMsg = styled(Caption)`
  color: ${(props) => props.theme.color.status.error};
`;

export const ChangePassword = styled(Caption)`
  color: ${(props) => props.theme.color.text.secondary};
`;

export const ChangePasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const GoToChangePassword = styled.span`
  color: ${(props) => props.theme.color.main.subColor};
  cursor: pointer;
`;
