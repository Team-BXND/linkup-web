import { useForm } from "react-hook-form";
import * as S from "../style";
import { linkupAxios } from "@/libs/customAxios";

type FormValues = {
  code: number;
};

type VerifyStepProps = {
  email: string;
  onNext: () => void;
};

function VerifyStep({ email, onNext }: VerifyStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    linkupAxios
      .post(`/auth/pwchange/verify`, { email, code: data.code })
      .then(() => {
        onNext();
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          const message =
            error.response?.data?.data?.message ??
            error.response?.data?.message ??
            "인증번호가 일치하지 않습니다.";
          setError("code", { message });
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
          type="text"
          placeholder="인증번호를  입력하세요."
          {...register("code", { required: "인증번호를 입력해주세요." })}
        />
        <S.ErrorMsg size="md" weight="semibold">
          {errors.code?.message}
        </S.ErrorMsg>
      </S.InputContainer>
      <S.ButtonContainer>
        <S.AuthButton type="submit" size="lg" color="default">
          인증번호 확인
        </S.AuthButton>
      </S.ButtonContainer>
    </S.FormContainer>
  );
}

export default VerifyStep;
