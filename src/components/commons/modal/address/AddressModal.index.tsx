import {
  useInput,
  useInputWithMaxLength,
  useInputWithRegex,
} from "@/src/lib/hooks/useInput";
import CheckIcon from "../../icons/CheckIcon.index";
import Spacer from "../../spacer/Spacer.index";
import Modal, { IModalProps } from "../Modal.index";
import * as S from "./AddressModal.styles";
import { useState } from "react";
import { numberRegex, phoneRegex } from "@/src/lib/constants/regex";
import { useDaumPostPopup } from "@/src/lib/hooks/useDaumPostPopup";
import { Address } from "react-daum-postcode";
import { IDeliveryAddressRequest } from "@/src/lib/apis/user/customer/Customer.types";
import { useMutation } from "@tanstack/react-query";
import { CustomerApi } from "@/src/lib/apis/user/customer/CustomerApi";
import { useToastify } from "@/src/lib/hooks/useToastify";

interface IAddressModalProps extends IModalProps {
  refetch: () => void;
}

export default function AddressModal(props: IAddressModalProps) {
  const nameArgs = useInputWithMaxLength(20);
  const receiverArgs = useInputWithMaxLength(10);
  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, onChangeDetailAddress] = useInput();
  const [phone1, onChangePhone1] = useInputWithRegex(numberRegex, "");
  const [phone2, onChangePhone2] = useInputWithRegex(numberRegex, "");
  const [defaultCheck, setDefaultCheck] = useState(false);
  const submitAvailable =
    zoneCode.length === 5 &&
    receiverArgs.value.length !== 0 &&
    address.length !== 0 &&
    phoneRegex.test(phone1) &&
    (phone2 !== "" ? phoneRegex.test(phone2) : true);
  const { setToast } = useToastify();

  const addressCallback = (data: Address) => {
    setZoneCode(data.zonecode);
    setAddress(data.address);
  };
  const openPostPopup = useDaumPostPopup(addressCallback);

  const { mutate } = useMutation({
    mutationFn: CustomerApi.POST_DELIVERY_ADDRESS,
    onSuccess: () => {
      props.refetch();
      props.onClose();
      setToast({ comment: "배송지를 추가했어요" });
    },
    onError: () => {
      setToast({ comment: "배송지 등록에 실패했어요" });
    },
  });

  const onSubmit = () => {
    const payload: IDeliveryAddressRequest = {
      deliveryName: nameArgs.value !== "" ? nameArgs.value : receiverArgs.value,
      zipCode: zoneCode,
      address: address,
      detailAddress: detailAddress,
      receiver: receiverArgs.value,
      phone1: phone1,
      phone2: phone2 !== "" ? phone2 : null,
      isDefault: defaultCheck,
    };
    mutate(payload);
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <S.Wrapper>
        <S.Title className="bold18">배송지 등록</S.Title>
        <Spacer width="100%" height="30px" />
        <S.Label className="medium16">배송지명</S.Label>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="배송지명을 입력하세요"
          value={nameArgs.value}
          onChange={nameArgs.onChange}
          maxLength={20}
        />
        <Spacer width="100%" height="24px" />
        <div className="flex-row">
          <S.Label className="medium16">수령인</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="이름을 입력하세요"
          value={receiverArgs.value}
          onChange={receiverArgs.onChange}
          maxLength={10}
        />
        <Spacer width="100%" height="24px" />
        <div className="flex-row">
          <S.Label className="medium16">주소 (배송지)</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.AddressInputWrapper
          className="flex-row-between-center"
          onClick={openPostPopup}
        >
          <S.AddressInput placeholder="우편 번호" value={zoneCode} readOnly />
          <S.SearchButton>검색</S.SearchButton>
        </S.AddressInputWrapper>
        <Spacer width="100%" height="5px" />
        <S.Input
          placeholder="주소"
          onClick={openPostPopup}
          value={address}
          readOnly
        />
        <Spacer width="100%" height="5px" />
        <S.Input placeholder="상세 주소" onChange={onChangeDetailAddress} />
        <Spacer width="100%" height="24px" />
        <div className="flex-row">
          <S.Label className="medium16">연락처1</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="휴대폰 번호 (숫자만)"
          value={phone1}
          onChange={onChangePhone1}
        />
        <Spacer width="100%" height="24px" />
        <S.Label className="medium16">연락처2</S.Label>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="휴대폰 번호 (숫자만)"
          value={phone2}
          onChange={onChangePhone2}
        />
        <Spacer width="100%" height="24px" />
        <S.CheckArea
          className="flex-row-align-center"
          onClick={() => setDefaultCheck(!defaultCheck)}
        >
          <CheckIcon
            isChecked={defaultCheck}
            size={24}
            defaultColor="var(--color-normalGray)"
          />
          <S.CheckLabel isChecked={defaultCheck} className="regular14">
            기본 배송지로 설정
          </S.CheckLabel>
        </S.CheckArea>
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.CancelButton className="bold16" onClick={props.onClose}>
            취소
          </S.CancelButton>
          <Spacer width="10px" height="100%" />
          <S.SubmitButton
            className="bold16"
            onClick={onSubmit}
            disabled={!submitAvailable}
          >
            등록하기
          </S.SubmitButton>
        </div>
      </S.Wrapper>
    </Modal>
  );
}
