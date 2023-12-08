import Modal from "../Modal.index";
import { IQuotationModalProps } from "./DetailModal.types";
import * as S from "./DetailModal.styles";
import Spacer from "../../spacer/Spacer.index";
import UploadIcon from "../../icons/UploadIcon.index";
import CalenderIcon from "../../icons/CalenderIcon.index";
import { useInputWithRegex } from "@/src/lib/hooks/useInput";
import { numberRegex } from "@/src/lib/constants/regex";

export default function QuotationModal({
  isOpen,
  onClose,
}: IQuotationModalProps) {
  const [cost, onChangeCost] = useInputWithRegex(numberRegex, "");
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper width={400}>
        <S.Title className="bold20">견적서 작성하기</S.Title>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular12">견적서 업로드</S.Label>
          <S.Required className="regular12">*</S.Required>
        </S.LabelWrapper>
        <S.InputWrapper className="flex-row-align-center" focusable={true}>
          <S.Input
            className="regular14"
            placeholder="견적서를 업로드해주세요"
            underline={true}
            readOnly
          />
          <UploadIcon size={16} />
        </S.InputWrapper>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular12">납기일 선택</S.Label>
          <S.Required className="regular12">*</S.Required>
        </S.LabelWrapper>
        <S.InputWrapper className="flex-row-align-center" focusable={true}>
          <S.Input
            className="regular14"
            placeholder="납기일을 선택해주세요"
            readOnly
          />
          <CalenderIcon size={16} />
        </S.InputWrapper>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular12">총 견적 비용</S.Label>
          <S.Required className="regular12">*</S.Required>
        </S.LabelWrapper>
        <S.InputWrapper className="flex-row-align-center">
          <S.Input
            className="regular14"
            placeholder="총 견적 비용을 입력해주세요"
            value={cost}
            onChange={onChangeCost}
          />
          {cost !== "" && <p className="regular12">원</p>}
        </S.InputWrapper>
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
