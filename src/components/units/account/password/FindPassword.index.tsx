import AccountInput from "@/src/components/commons/inputs/account/AccountInput.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "@/src/components/units/account/Accout.styles";
import { emailRegex } from "@/src/lib/constants/regex";
import { useInputWithError } from "@/src/lib/hooks/useInput";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FindPassword() {
  const [sendCode, setSendCode] = useState(false);
  const [codeSending, setCodeSending] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const router = useRouter();

  const emailInputArgs = useInputWithError(
    "이메일을 인증해주세요.",
    (value: string) => emailRegex.test(value),
    (value: string) => sendCode && emailRegex.test(value),
  );

  const codeInputArgs = useInputWithError(
    "인증 코드를 다시 확인해주세요.",
    (value: string) => value.length === 6,
    (value: string) => sendCode && value.length === 6,
  );

  const sendCodeToEmail = () => {
    setSendCode(true);
  };

  const checkCode = () => {
    setResult("user1-password");
  };

  return (
    <S.Wrapper className="flex-center">
      <S.FormWrapper>
        <S.Title className="bold28">비밀번호 찾기</S.Title>
        <Spacer width="100%" height="52px" />
        {result === null && (
          <>
            <AccountInput
              placeholder="이메일"
              isError={emailInputArgs.error}
              errorMessage={emailInputArgs.errorMessage}
              tailButtonTitle={sendCode ? "재요청" : "인증요청"}
              tailButtonValidate={emailInputArgs.isCorrect}
              disabled={codeSending}
              onChange={emailInputArgs.onChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendCodeToEmail();
              }}
              onClickTailButton={sendCodeToEmail}
            />
            {sendCode && (
              <>
                <Spacer width="100%" height="14px" />
                <AccountInput
                  placeholder="이메일 인증 코드"
                  isError={codeInputArgs.error}
                  errorMessage={codeInputArgs.errorMessage}
                  hideValue={true}
                  tailButtonTitle="확인"
                  tailButtonValidate={codeInputArgs.isCorrect}
                  onChange={codeInputArgs.onChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") checkCode();
                  }}
                  onClickTailButton={checkCode}
                />
              </>
            )}
            <Spacer width="100%" height="40px" />
          </>
        )}
        {result && (
          <>
            <S.ResultWrapper>
              <p className="regular14">회원님의 비밀번호</p>
              <Spacer width="100%" height="20px" />
              <S.Result className="bold18">{result}</S.Result>
            </S.ResultWrapper>
            <Spacer width="100%" height="40px" />
            <S.Button
              className="bold18"
              onClick={() => router.replace("/login")}
            >
              로그인
            </S.Button>
          </>
        )}
      </S.FormWrapper>
    </S.Wrapper>
  );
}
