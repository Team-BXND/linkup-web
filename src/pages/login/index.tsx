import { useForm } from "react-hook-form";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/hooks/Auth/useLogin";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token.constants";
import { linkupAxios } from "@/libs/customAxios";

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const { login } = useLogin();

  const onSubmit = (data: FormValues) => {
    linkupAxios
      .post(`/auth/signin`, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        const accessToken = response.data.data[ACCESS_TOKEN_KEY];
        const refreshToken = response.data.data[REFRESH_TOKEN_KEY];
        login(accessToken, refreshToken);
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          const message =
            error.response?.data?.data?.message ??
            error.response?.data?.message ??
            "이메일 또는 비밀번호가 올바르지 않습니다.";
          setError("root", { message });
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
        <S.AuthInput
          status="default"
          $size="lg"
          type="password"
          placeholder="비밀번호를 입력하세요."
          {...register("password", { required: "비밀번호를 입력해주세요." })}
        />
        <S.ErrorMsg size="md" weight="semibold">
          {errors.password?.message}
        </S.ErrorMsg>
        <S.ErrorMsg size="md" weight="semibold">
          {errors.root?.message}
        </S.ErrorMsg>
      </S.InputContainer>
      <S.ButtonContainer>
        <S.AuthButton type="submit" size="lg" color="default">
          로그인 하기
        </S.AuthButton>
        <S.AuthButton
          size="lg"
          color="negative"
          onClick={() => navigate("/signup")}
        >
          회원가입 하기
        </S.AuthButton>
      </S.ButtonContainer>
    </S.FormContainer>
  );
}

export default Login;
