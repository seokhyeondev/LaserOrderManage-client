import * as S from "./OrderDetailMenu.styles";

export default function OrderDetailMenu() {
  return (
    <S.Wrapper>
      <S.Label className="bold20">바로가기</S.Label>
      <S.MenuItem isFocus={true} className="flex-column">
        기본 정보
      </S.MenuItem>
      <S.MenuItem isFocus={false} className="flex-column">
        도면 정보
      </S.MenuItem>
      <S.MenuItem isFocus={false} className="flex-column">
        견적서/발주서
      </S.MenuItem>
    </S.Wrapper>
  );
}
