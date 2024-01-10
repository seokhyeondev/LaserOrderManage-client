import MainLogoDark from "@/src/components/commons/logo/MainLogoDark.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./LayoutFooter.styles";

export default function LayoutFooter() {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <MainLogoDark />
      </S.LogoWrapper>
      <S.InfoWrapper>
        <div className="flex-row">
          <S.WebLink href="https://www.naver.com" target="_blank">
            개인정보 취급방침
          </S.WebLink>
          <Spacer width="30px" height="100%" />
          <S.WebLink href="https://www.naver.com" target="_blank">
            이메일주소 무단수집거부
          </S.WebLink>
        </div>
        <S.InfoText className="regular14">
          경기도 안산시 단원구 MTV 1로 129 시화 MTV 8사 215호 (목내동 517-14)
        </S.InfoText>
        <S.InfoText className="regular14">
          사업자번호: 134-01-68222 대표자: 정연근
        </S.InfoText>
        <S.InfoText className="regular14">
          Copyright 2015 금오레이저 All Rights Reserved
        </S.InfoText>
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
