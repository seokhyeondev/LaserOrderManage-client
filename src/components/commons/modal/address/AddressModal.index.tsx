import CheckIcon from "../../icons/CheckIcon.index";
import Spacer from "../../spacer/Spacer.index";
import Modal, { IModalProps } from "../Modal.index";
import * as S from "./AddressModal.styles";

interface IAddressModalProps extends IModalProps {}

export default function AddressModal(props: IAddressModalProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <S.Wrapper>
        <S.Title className="bold18">배송지 등록</S.Title>
        <Spacer width="100%" height="30px" />
        <S.Label className="medium16">배송지명</S.Label>
        <Spacer width="100%" height="10px" />
        <S.Input placeholder="배송지명을 입력하세요" />
        <Spacer width="100%" height="24px" />
        <div className="flex-row">
          <S.Label className="medium16">수령인</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.Input placeholder="이름을 입력하세요" />
        <Spacer width="100%" height="24px" />
        <div className="flex-row">
          <S.Label className="medium16">주소 (배송지)</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.AddressInputWrapper className="flex-row-between-center">
          <S.AddressInput placeholder="우편 번호" />
          <S.SearchButton>검색</S.SearchButton>
        </S.AddressInputWrapper>
        <Spacer width="100%" height="5px" />
        <S.Input placeholder="주소" />
        <Spacer width="100%" height="5px" />
        <S.Input placeholder="상세 주소" />
        <Spacer width="100%" height="24px" />
        <div className="flex-row">
          <S.Label className="medium16">연락처1</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.Input placeholder="휴대폰 번호 (숫자만)" />
        <Spacer width="100%" height="24px" />
        <S.Label className="medium16">연락처2</S.Label>
        <Spacer width="100%" height="10px" />
        <S.Input placeholder="휴대폰 번호 (숫자만)" />
        <Spacer width="100%" height="24px" />
        <S.CheckArea className="flex-row-align-center">
          <CheckIcon isChecked={true} size={24} defaultColor="var(--color-normalGray)"/>
          <p className="regular14">기본 배송지로 설정</p>
        </S.CheckArea>
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.CancelButton className="bold16" onClick={props.onClose}>
            취소
          </S.CancelButton>
          <Spacer width="10px" height="100%" />
          <S.SubmitButton className="bold16" isActive={true}>
            등록하기
          </S.SubmitButton>
        </div>
      </S.Wrapper>
    </Modal>
  );
}
