import * as S from "./OrderDetailBottombar.styles";

export default function OrderDetailBottombar() {
  return (
    <S.Wrapper className="flex-row-between-center">
      <S.Announce className="medium20">
        견적서를 확인하고 승인해주세요
      </S.Announce>
      <S.BottombarButton className="bold20">견적 승인하기</S.BottombarButton>
    </S.Wrapper>
  );
}
