import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import {
  POST_PROCESSING,
  ICreateOrderPageProps,
  MANUFACTURE_SERVICES,
} from "../CreateOrder.types";
import { useState, useEffect } from "react";
import LoadOrderModal from "@/src/components/commons/modal/create/LoadOrderModal.index";
import { useInputWithMaxLength } from "@/src/lib/hooks/useInput";
import { useSelect } from "@/src/lib/hooks/useSelect";
import { useRecoilState } from "recoil";
import { createOrderState } from "@/src/store/createOrder"
import { IOrderHistoryResponse } from "@/src/lib/apis/order/create/OrderCreate.types";

export default function BasicInfo(props: ICreateOrderPageProps) {
  const [editMode, setEditMode] = useState(false);
  const [loadModalOpen, setLoadModalOpen] = useState(false);
  const nameArgs = useInputWithMaxLength(30);
  const manufacturingArgs = useSelect();
  const postProcessingArgs = useSelect();
  const nextStepAvailable = nameArgs.value.length !== 0 && manufacturingArgs.selected.length !== 0 
  const [orderState, setOrderState] = useRecoilState(createOrderState);

  useEffect(() => {
    nameArgs.setValue(orderState.name);
    manufacturingArgs.setSelected(orderState.manufacturing);
    postProcessingArgs.setSelected(orderState.postProcessing);
  }, []);
  
  const loadOrder = (callback: IOrderHistoryResponse) => {
    setOrderState({
      name: callback.name,
      manufacturing: callback.manufacturingList,
      postProcessing: callback.postProcessingList ?? [],
      drawingList: callback.drawingList,
      request: callback.request ?? "",
      deliveryAddressId: callback.deliveryAddress.id,
      isNewIssue: true
    });
    nameArgs.setValue(callback.name);
    manufacturingArgs.setSelected(callback.manufacturingList);
    postProcessingArgs.setSelected(callback.postProcessingList ?? []);
    setEditMode(true);
  };

  const onNext = () => {
    setOrderState({
      ...orderState, 
      name: nameArgs.value, 
      manufacturing: manufacturingArgs.selected, 
      postProcessing: postProcessingArgs.selected,
      isNewIssue: !editMode
    });
    if(props.onNext) props.onNext();
  }



  return (
    <>
      {!editMode && (
        <>
          <S.LoadWrapper className="flex-row-between-center">
            <S.LoadInfoWrapper className="flex-column-between">
              <p className="bold20">거래 불러오기</p>
              <p className="medium18">
                이전에 진행했던 거래 내역 정보를 불러옵니다.
              </p>
            </S.LoadInfoWrapper>
            <S.LoadButton
              className="bold18"
              onClick={() => setLoadModalOpen(true)}
            >
              불러오기
            </S.LoadButton>
          </S.LoadWrapper>
          <Spacer width="100%" height="10px" />
        </>
      )}
      <S.FormWrapper className="flex-column">
        <S.FormBodyWrapper>
          <S.FormTitle className="bold24">기본 정보</S.FormTitle>
          <Spacer width="100%" height="50px" />
          <div className="flex-row">
            <S.FormLabel className="medium20">거래 이름</S.FormLabel>
            <S.RequiredLabel className="medium20">*</S.RequiredLabel>
          </div>
          <Spacer width="100%" height="18px" />
          <S.FormInput
            className="medium18"
            placeholder="예) 부품 제작 프로젝트"
            value={nameArgs.value}
            maxLength={30}
            onChange={nameArgs.onChange}
          />
          <Spacer width="100%" height="8px" />
          <S.FormInputLength className="regular14 flex-column-end">
            {`${nameArgs.value.length}/30`}
          </S.FormInputLength>
          <Spacer width="100%" height="40px" />
          <div className="flex-row">
            <S.FormLabel className="medium20">제조 서비스</S.FormLabel>
            <S.RequiredLabel className="medium20">*</S.RequiredLabel>
          </div>
          <Spacer width="100%" height="20px" />
          <div className="flex-row">
            {MANUFACTURE_SERVICES.map((el) => (
              <S.FormSelect
                className="flex-center medium16"
                isSelect={manufacturingArgs.selected.includes(el.key)}
                key={el.key}
                onClick={() => manufacturingArgs.onSelect(el.key)}
              >
                {el.name}
              </S.FormSelect>
            ))}
          </div>
          <Spacer width="100%" height="40px" />
          <div className="flex-row">
            <S.FormLabel className="medium20">후처리 서비스</S.FormLabel>
            <S.RequiredLabel className="medium20">*</S.RequiredLabel>
          </div>
          <Spacer width="100%" height="20px" />
          <div className="flex-row">
            {POST_PROCESSING.map((el) => (
              <S.FormSelect
                className="flex-center medium16"
                isSelect={postProcessingArgs.selected.includes(el.key)}
                key={el.key}
                onClick={() => postProcessingArgs.onSelect(el.key)}
              >
                {el.name}
              </S.FormSelect>
            ))}
          </div>
        </S.FormBodyWrapper>
        <S.FormButtonWrapper className="flex-column-end">
          <S.NextButton
            className="bold20"
            enabled={nextStepAvailable}
            onClick={onNext}
            disabled={!nextStepAvailable}
          >
            다음
          </S.NextButton>
        </S.FormButtonWrapper>
      </S.FormWrapper>
      <LoadOrderModal
        isOpen={loadModalOpen}
        callback={loadOrder}
        onClose={() => setLoadModalOpen(false)}
      />
    </>
  );
}
