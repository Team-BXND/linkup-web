import { useForm } from "react-hook-form";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { linkupAxios } from "@/libs/customAxios";

type FormValues = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
};

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    linkupAxios
      .post(`/auth/signup`, {
        email: data.email,
        username: data.nickname,
        password: data.password,
      })
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        if (error.status !== 400 && error.status !== 409) {
          alert("문제가 발생하였습니다.\n잠시 후 다시 시도해 주세요.");
        } else {
          alert(error.response.data.message);
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
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "이메일 형식이 올바르지 않습니다.",
            },
          })}
        />
        <S.ErrorMsg size="md" weight="semibold">
          {errors.email?.message}
        </S.ErrorMsg>
        <S.AuthInput
          status="default"
          $size="lg"
          placeholder="닉네임을 입력하세요."
          {...register("nickname", { required: "닉네임을 입력해주세요." })}
        />
        <S.ErrorMsg size="md" weight="semibold">
          {errors.nickname?.message}
        </S.ErrorMsg>
        <S.AuthInput
          status="default"
          $size="lg"
          type="password"
          placeholder="비밀번호를 입력하세요."
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/,
              message:
                "비밀번호는 8자 이상, 소문자 및 특수문자를 포함해야 합니다.",
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
          placeholder="비밀번호를 다시 입력하세요."
          {...register("passwordConfirm", {
            required: "비밀번호를 다시 입력해주세요.",
            validate: (value) =>
              value === watch("password") || "비밀번호가 일치하지 않습니다.",
          })}
        />
        <S.ErrorMsg size="md" weight="semibold">
          {errors.passwordConfirm?.message}
        </S.ErrorMsg>
      </S.InputContainer>
      <S.ButtonContainer>
        <S.AuthButton type="submit" size="lg" color="default">
          회원가입 하기
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

export default Signup;
