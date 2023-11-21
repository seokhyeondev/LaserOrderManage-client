import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import {
  AFTER_SERVICES,
  ICreateOrderPageProps,
  MANUFACTURE_SERVICES,
} from "../CreateOrder.types";
import { useState } from "react";
import LoadOrderModal from "@/src/components/commons/modal/create/LoadOrderModal.index";
import { useInputWithMaxLength } from "@/src/lib/hooks/useInput";
import { useSelect } from "@/src/lib/hooks/useSelect";

export default function BasicInfo(props: ICreateOrderPageProps) {
  const [editMode, setEditMode] = useState(false);
  const [loadModalOpen, setLoadModalOpen] = useState(false);
  const [name, onChangeName] = useInputWithMaxLength(30);
  const [selectedManufacture, onSelectManufacture] = useSelect();
  const [selectedAfterService, onSelectAfterService] = useSelect();
  const nextStepAvaliable =
    name.length !== 0 &&
    selectedManufacture.length !== 0 &&
    selectedAfterService.length !== 0;

  const loadOrder = () => {
    setEditMode(true);
    setLoadModalOpen(false);
  };

  const onNext = () => {
    if (nextStepAvaliable) {
      props.onNext();
    }
  };

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
          <Spacer width="100%" height="15px" />
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
            value={name}
            maxLength={30}
            onChange={onChangeName}
          />
          <Spacer width="100%" height="8px" />
          <S.FormInputLength className="regular14 flex-column-end">
            {`${name.length}/30`}
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
                className="flex-center bold16"
                isSelect={selectedManufacture.includes(el.key)}
                key={el.key}
                onClick={() => onSelectManufacture(el.key)}
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
            {AFTER_SERVICES.map((el) => (
              <S.FormSelect
                className="flex-center bold16"
                isSelect={selectedAfterService.includes(el.key)}
                key={el.key}
                onClick={() => onSelectAfterService(el.key)}
              >
                {el.name}
              </S.FormSelect>
            ))}
          </div>
        </S.FormBodyWrapper>
        <S.FormButtonWrapper className="flex-column-end">
          <S.NextButton
            className="bold20"
            enabled={nextStepAvaliable}
            onClick={onNext}
          >
            다음
          </S.NextButton>
        </S.FormButtonWrapper>
      </S.FormWrapper>
      <LoadOrderModal
        isOpen={loadModalOpen}
        callback={() => loadOrder()}
        onClose={() => setLoadModalOpen(false)}
      />
    </>
  );
}
