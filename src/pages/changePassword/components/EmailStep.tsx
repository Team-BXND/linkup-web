import { useForm } from "react-hook-form";
import * as S from "../style";
import { useNavigate } from "react-router-dom";
import { linkupAxios } from "@/libs/customAxios";

type FormValues = {
  email: string;
  password: string;
};

type EmailStepProps = {
  onNext: (email: string) => void;
};

function EmailStep({ onNext }: EmailStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    linkupAxios
      .post(`/auth/pwchange/send`, {
        email: data.email,
      })
      .then(() => {
        onNext(data.email);
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          const message =
            error.response?.data?.data?.message ??
            error.response?.data?.message ??
            "잘못된 이메일입니다.";
          setError("email", { message });
        } else if (error.response?.status === 404) {
          setError("email", {
            message: "등록되지 않은 이메일입니다.",
          });
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
          type="email"
          placeholder="이메일을 입력하세요."
          {...register("email", { required: "이메일을 입력해주세요." })}
        />
        <S.ErrorMsg size="md" weight="semibold">
          {errors.email?.message}
        </S.ErrorMsg>
      </S.InputContainer>
      <S.ButtonContainer>
        <S.AuthButton type="submit" size="lg" color="default">
          인증번호 발송
        </S.AuthButton>
        <S.AuthButton
          size="lg"
          color="negative"
          onClick={() => navigate("/login")}
        >
          로그인 하기
        </S.AuthButton>
      </S.ButtonContainer>
    </S.FormContainer>
  );
}

export default EmailStep;
