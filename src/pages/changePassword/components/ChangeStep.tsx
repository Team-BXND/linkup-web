import { useForm } from "react-hook-form";
import * as S from "../style";
import { useNavigate } from "react-router-dom";
import { linkupAxios } from "@/libs/customAxios";

type FormValues = {
  password: string;
  confirmPassword: string;
};

type ChangeStepProps = {
  email: string;
};

function ChangeStep({ email }: ChangeStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "비밀번호가 일치하지 않습니다." });
      return;
    }

    linkupAxios
      .post(`/auth/pwchange/change`, {
        email: email,
        password: data.password,
      })
      .then((response) => {
        alert(response.data.data.message);
        navigate("/login")
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          const message =
            error.response?.data?.data?.message ??
            error.response?.data?.message ??
            "비밀번호 형식이 맞지 않습니다.";
          setError("password", { message }); // 필드 수준 오류
        } else {
          alert("문제가 발생하였습니다.\n잠시 후 다시 시도해 주세요.");
        }
      });
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <S.InputContainer>
        <S.AuthInput
          status="default"
          $size="lg"
          type="password"
          placeholder="새 비밀번호를 입력하세요"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              message: "8자 이상, 소문자, 특수문자를 포함해야 합니다.",
            },
          })}
        />
        <S.ErrorMsg size="md" weight="semibold">
          {errors.password?.message}
        </S.ErrorMsg>
        <S.AuthInput
          status="default"
          $size="lg"
          type="password"
          placeholder="새 비밀번호를 다시 입력하세요"
          {...register("confirmPassword", {
            required: "비밀번호를 다시 입력해주세요.",
          })}
        />
        <S.ErrorMsg size="md" weight="semibold">
          {errors.confirmPassword?.message}
        </S.ErrorMsg>
      </S.InputContainer>
      <S.ButtonContainer>
        <S.AuthButton type="submit" size="lg" color="default">
          비밀번호 변경
        </S.AuthButton>
      </S.ButtonContainer>
    </S.FormContainer>
  );
}

export default ChangeStep;
