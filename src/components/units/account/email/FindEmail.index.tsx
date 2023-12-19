import AccountInput from "@/src/components/commons/inputs/account/AccountInput.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "@/src/components/units/account/Accout.styles";
import { numberRegex, phoneRegex } from "@/src/lib/constants/regex";
import { useInputWithError } from "@/src/lib/hooks/useInput";
import { useState } from "react";

export default function FindEmail() {
  const [find, setFind] = useState(false);

  const nameInputArgs = useInputWithError(
    "이름은 두 글자 이상입니다",
    (value: string) => value.length > 1,
    (value: string) => value.length > 1,
  );

  const phoneInputArgs = useInputWithError(
    "올바른 휴대폰 번호를 입력해주세요.",
    (value: string) => phoneRegex.test(value),
    (value: string) => phoneRegex.test(value),
    numberRegex,
  );

  const findEmail = () => {
    const namePass = nameInputArgs.passError();
    const phonePass = phoneInputArgs.passError();
    if (!(namePass && phonePass)) return;
    setFind(true);
  };

  return (
    <S.Wrapper className="flex-center">
      <S.FormWrapper>
        <S.Title className="bold28">이메일 찾기</S.Title>
        <Spacer width="100%" height="52px" />
        {!find && (
          <>
            <AccountInput
              placeholder="이름"
              value={nameInputArgs.value}
              isError={nameInputArgs.error}
              errorMessage={nameInputArgs.errorMessage}
              onChange={nameInputArgs.onChange}
            />
            <Spacer width="100%" height="14px" />
            <AccountInput
              placeholder="휴대폰 번호 (숫자만 입력해주세요)"
              value={phoneInputArgs.value}
              isError={phoneInputArgs.error}
              errorMessage={phoneInputArgs.errorMessage}
              onChange={phoneInputArgs.onChange}
            />
            <Spacer width="100%" height="40px" />
            <S.Button className="bold18" onClick={findEmail}>
              이메일 찾기
            </S.Button>
          </>
        )}
        {find && (
          <>
            <Spacer width="100%" height="40px" />
            <div className="flex-row">
              <S.SubButton className="bold18">비밀번호 찾기</S.SubButton>
              <Spacer width="10px" height="100%" />
              <S.Button className="bold18">로그인</S.Button>
            </div>
          </>
        )}
      </S.FormWrapper>
    </S.Wrapper>
  );
}
