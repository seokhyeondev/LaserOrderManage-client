import {
  useInputWithMaxLength,
  useInputWithRegex,
} from "@/src/lib/hooks/useInput";
import Spacer from "../../spacer/Spacer.index";
import Modal, { IModalProps } from "../Modal.index";
import * as S from "./MypageModal.styles";
import { numberRegex, phoneRegex } from "@/src/lib/constants/regex";

interface IMangerModalProps extends IModalProps {}

export default function ManagerModal({ isOpen, onClose }: IMangerModalProps) {
  const nameArgs = useInputWithMaxLength(10);
  const [phone, onChangePhone] = useInputWithRegex(numberRegex, "");
  const submitAvailable = nameArgs.value.length > 1 && phoneRegex.test(phone);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper>
        <S.Title className="bold18">담당자 추가/수정</S.Title>
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.Label className="medium16">담당자명</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="담당자명을 입력하세요"
          value={nameArgs.value}
          onChange={nameArgs.onChange}
        />
        <Spacer width="100%" height="24px" />
        <div className="flex-row">
          <S.Label className="medium16">담당자 휴대폰 번호</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="담당자 휴대폰 번호를 입력하세요"
          value={phone}
          onChange={onChangePhone}
        />
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.CancelButton className="bold16" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="10px" height="100%" />
          <S.SubmitButton className="bold16" disabled={!submitAvailable}>
            등록하기
          </S.SubmitButton>
        </div>
      </S.Wrapper>
    </Modal>
  );
}
