import { useSearchParams } from "next/navigation";
import * as S from "@/src/components/units/account/Accout.styles";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import { useEffect, useState } from "react";
import AccountInput from "@/src/components/commons/inputs/account/AccountInput.index";
import { useInputWithError } from "@/src/lib/hooks/useInput";
import { passwordRegex } from "@/src/lib/constants/regex";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { UserApi } from "@/src/lib/apis/user/UserApi";
import { useToastify } from "@/src/lib/hooks/useToastify";

export default function EditPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [complete, setComplete] = useState(false);
  const { setToast } = useToastify();
  const router = useRouter();

  const passwordArgs = useInputWithError(
    "영문, 숫자, 특수문자를 조합하여 8자리 이상 입력해주세요.",
    (value: string) => passwordRegex.test(value),
    (value: string) => passwordRegex.test(value),
  );
  const rePasswordArgs = useInputWithError(
    "비밀번호가 일치하지 않습니다.",
    (value: string) => value === passwordArgs.value,
    (value: string) => value !== "" && value === passwordArgs.value,
  );

  const { mutate } = useMutation({
    mutationFn: UserApi.EDIT_PASSWORD,
    onSuccess: () => {
      setComplete(true);
    },
    onError: () => {
      setToast({ comment: "비밀번호 변경에 실패했어요" });
    },
  });

  const onSubmit = () => {
    if (token === null) {
      setToast({ comment: "비밀번호를 변경할 수 없습니다" });
      return;
    }
    const pwPass = passwordArgs.passError();
    const rePwPass = rePasswordArgs.passError();
    if (!(pwPass && rePwPass)) return;
    mutate({ payload: { password: passwordArgs.value.trim() }, token: token });
  };

  return (
    <S.Wrapper className="flex-center">
      <S.FormWrapper>
        <S.Title className="bold28">비밀번호 변경</S.Title>
        <Spacer width="100%" height="52px" />
        {!complete && (
          <>
            <AccountInput
              placeholder="새 비밀번호"
              value={passwordArgs.value}
              isError={passwordArgs.error || passwordArgs.errorWithEmpty}
              errorMessage={passwordArgs.errorMessage}
              hideValue={true}
              onChange={passwordArgs.onChange}
            />
            <Spacer width="100%" height="14px" />
            <AccountInput
              placeholder="새 비밀번호 확인"
              value={rePasswordArgs.value}
              isError={
                rePasswordArgs.error ||
                (passwordArgs.value !== "" && rePasswordArgs.errorWithEmpty)
              }
              errorMessage={rePasswordArgs.errorMessage}
              hideValue={true}
              onChange={rePasswordArgs.onChange}
            />
            <Spacer width="100%" height="40px" />
            <S.Button className="bold18" onClick={onSubmit}>
              비밀번호 변경
            </S.Button>
          </>
        )}
        {complete && (
          <>
            <S.ResultWrapper>
              <p className="regular16">비밀번호가 변경됐습니다</p>
            </S.ResultWrapper>
            <Spacer width="100%" height="60px" />
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
