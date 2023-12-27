import { useState } from "react";
import Spacer from "../../spacer/Spacer.index";
import Modal, { IModalProps } from "../Modal.index";
import * as S from "./MypageModal.styles";
import { useInput } from "@/src/lib/hooks/useInput";
import { Address } from "react-daum-postcode";
import { useDaumPostPopup } from "@/src/lib/hooks/useDaumPostPopup";

interface IModalAddress {
  zoneCode: string;
  address: string;
  detailAddress: string;
}

interface IEditAddressModalProps extends IModalProps {
  initData: IModalAddress;
  onEdit: (zoneCode: string, address: string, detailAddress: string) => void;
}

export default function EditAddressModal({
  isOpen,
  initData,
  onClose,
  onEdit,
}: IEditAddressModalProps) {
  const [zoneCode, setZoneCode] = useState(initData.zoneCode);
  const [address, setAddress] = useState(initData.address);
  const [detailAddress, onChangeDetailAddress] = useInput(
    initData.detailAddress,
  );

  const addressCallback = (data: Address) => {
    setZoneCode(data.zonecode);
    setAddress(data.address);
  };
  const openPostPopup = useDaumPostPopup(addressCallback);

  const onSubmit = () => {
    onEdit(zoneCode, address, detailAddress);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper>
        <S.Title>주소 변경하기</S.Title>
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.Label className="medium16">주소</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="우편번호"
          value={zoneCode}
          onClick={openPostPopup}
          readOnly
        />
        <Spacer width="100%" height="5px" />
        <S.Input
          placeholder="주소"
          value={address}
          onClick={openPostPopup}
          readOnly
        />
        <Spacer width="100%" height="24px" />
        <S.Label className="medium16">상세 주소</S.Label>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="상세 주소를 입력하세요"
          value={detailAddress}
          onChange={onChangeDetailAddress}
        />
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.CancelButton className="bold16" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="10px" height="100%" />
          <S.SubmitButton className="bold16" onClick={onSubmit}>
            변경하기
          </S.SubmitButton>
        </div>
      </S.Wrapper>
    </Modal>
  );
}
