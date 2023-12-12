import UploadIcon from "../../icons/UploadIcon.index";
import Spacer from "../../spacer/Spacer.index";
import Modal from "../Modal.index";
import { IPurchaseOrderModalProps } from "./DetailModal.types";
import * as S from "./DetailModal.styles";
import CalenderIcon from "../../icons/CalenderIcon.index";

export default function PurchaseOrderModal({
  isOpen,
  onClose,
}: IPurchaseOrderModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper width={400}>
        <S.Title className="bold20">발주서 작성하기</S.Title>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular12">지급일 선택</S.Label>
          <S.Required className="regular12">*</S.Required>
        </S.LabelWrapper>
        <S.InputWrapper className="flex-row-align-center" focusable={true}>
          <S.Input
            className="regular14"
            placeholder="지급일을 선택해주세요"
            readOnly
          />
          <CalenderIcon size={16} />
        </S.InputWrapper>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular12">검수 기간 선택</S.Label>
          <S.Required className="regular12">*</S.Required>
        </S.LabelWrapper>
        <S.InputWrapper className="flex-row-align-center" focusable={true}>
          <S.Input
            className="regular14"
            placeholder="검수 기간을 선택해주세요"
            readOnly
          />
          <CalenderIcon size={16} />
        </S.InputWrapper>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular12">검수 내용</S.Label>
          <S.Required className="regular12">*</S.Required>
        </S.LabelWrapper>
        <S.TextArea
          className="regular14"
          placeholder="검수 내용을 입력해주세요"
        />
        <Spacer width="100%" height="68px" />
        <S.ButtonWrapper className="flex-row">
          <S.CancelButton className="bold14" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="8px" height="100%" />
          <S.SubmitButton className="bold14">작성하기</S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Modal>
  );
}
