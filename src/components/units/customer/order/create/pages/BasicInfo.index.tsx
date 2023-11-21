import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import { AFTER_SERVICES, MANUFACTURE_SERVICES } from "../CreateOrder.types";
import { useState } from "react";
import LoadOrderModal from "@/src/components/commons/modal/create/LoadOrderModal.index";

export default function BasicInfo() {
  const [editMode, setEditMode] = useState(false);
  const [loadModalOpen, setLoadModalOpen] = useState(false);

  const loadOrder = () => {
    setEditMode(true);
    setLoadModalOpen(false);
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
          />
          <Spacer width="100%" height="8px" />
          <S.FormInputLength className="regular14 flex-column-end">
            0/30
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
                isSelect={true}
                key={el.key}
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
                isSelect={true}
                key={el.key}
              >
                {el.name}
              </S.FormSelect>
            ))}
          </div>
        </S.FormBodyWrapper>
        <S.FormButtonWrapper className="flex-column-end">
          <S.NextButton className="bold20" enabled={true}>
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
