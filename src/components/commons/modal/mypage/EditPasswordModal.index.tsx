import { useInput } from "@/src/lib/hooks/useInput";
import Spacer from "../../spacer/Spacer.index";
import Modal, { IModalProps } from "../Modal.index";
import * as S from "./MypageModal.styles";
import { useState } from "react";
import { passwordRegex } from "@/src/lib/constants/regex";
import { useToastify } from "@/src/lib/hooks/useToastify";

interface IEditPasswordModalProps extends IModalProps {}

export default function EditPasswordModal({
  isOpen,
  onClose,
}: IEditPasswordModalProps) {
  const [checkPw, setCheckPw] = useState(false);
  const [currentPw, onChangeCurrentPw] = useInput();
  const [currentPwError, setCurrentPwError] = useState(false);
  const [newPw, onChangeNewPw] = useInput();
  const [newRePw, onCahngeNewRePw] = useInput();
  const { setToast } = useToastify();
  const submitAvailable =
    passwordRegex.test(newPw) &&
    passwordRegex.test(newRePw) &&
    newPw === newRePw;

  const checkCurrentPw = () => {
    setCheckPw(true);
  };

  const onSubmit = () => {
    setToast({ comment: "비밀번호를 변경했어요" });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper>
        <S.Title className="bold18">비밀번호 변경</S.Title>
        <Spacer width="100%" height="30px" />
        {!checkPw && (
          <>
            <div className="flex-row">
              <S.Label className="medium16">현재 비밀번호</S.Label>
              <S.Required className="medium16">*</S.Required>
            </div>
            <Spacer width="100%" height="10px" />
            <S.Input
              placeholder="현재 비밀번호를 입력하세요"
              type="password"
              value={currentPw}
              onChange={onChangeCurrentPw}
            />
            {currentPwError && (
              <S.ErrorMessage className="regular12">
                비밀번호를 다시 확인해주세요.
              </S.ErrorMessage>
            )}
          </>
        )}
        {checkPw && (
          <>
            <div className="flex-row">
              <S.Label className="medium16">새 비밀번호</S.Label>
              <S.Required className="medium16">*</S.Required>
            </div>
            <Spacer width="100%" height="10px" />
            <S.Input
              placeholder="새 비밀번호를 입력하세요"
              type="password"
              value={newPw}
              onChange={onChangeNewPw}
            />
            <Spacer width="100%" height="24px" />
            <div className="flex-row">
              <S.Label className="medium16">새 비밀번호 확인</S.Label>
              <S.Required className="medium16">*</S.Required>
            </div>
            <Spacer width="100%" height="10px" />
            <S.Input
              placeholder="다시 입력하세요"
              type="password"
              value={newRePw}
              onChange={onCahngeNewRePw}
            />
            <S.Announce className="regular12">
              영문, 숫자, 특수문자를 조합하여 8자리 이상 입력해주세요.
            </S.Announce>
          </>
        )}
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.CancelButton className="bold16" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="10px" height="100%" />
          {!checkPw && (
            <S.SubmitButton
              className="bold16"
              disabled={!passwordRegex.test(currentPw)}
              onClick={checkCurrentPw}
            >
              확인
            </S.SubmitButton>
          )}
          {checkPw && (
            <S.SubmitButton
              className="bold16"
              disabled={!submitAvailable}
              onClick={onSubmit}
            >
              변경하기
            </S.SubmitButton>
          )}
        </div>
      </S.Wrapper>
    </Modal>
  );
}
