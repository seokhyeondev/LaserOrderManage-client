import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import { AFTER_SERVICES, MANUFACTURE_SERVICES } from "../CreateOrder.types";

export default function BasicInfo() {
  return (
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
  );
}
