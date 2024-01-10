import MainLogo from "@/src/components/commons/logo/MainLogo.index";
import MainLogoDark from "@/src/components/commons/logo/MainLogoDark.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";

export default function LayoutFooter() {
  return (
    <Wrapper>
      <LogoWrapper>
        <MainLogoDark />
      </LogoWrapper>
      <InfoWrapper>
        <div className="flex-row">
          <WebLink href="https://www.naver.com" target="_blank">
            개인정보 취급방침
          </WebLink>
          <Spacer width="30px" height="100%" />
          <WebLink href="https://www.naver.com" target="_blank">
            이메일주소 무단수집거부
          </WebLink>
        </div>
        <InfoText className="regular14">
          경기도 안산시 단원구 MTV 1로 129 시화 MTV 8사 215호 (목내동 517-14)
        </InfoText>
        <InfoText className="regular14">
          사업자번호: 134-01-68222 대표자: 정연근
        </InfoText>
        <InfoText className="regular14">
          Copyright 2015 금오레이저 All Rights Reserved
        </InfoText>
      </InfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin: 0 auto;
  height: 198px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-grayBlack);

  ${media.pc} {
    padding-inline: 240px;
  }
  ${media.tablet} {
    padding-inline: 48px;
  }
  ${media.mobile} {
    height: 242px;
    padding-inline: 24px;
    flex-direction: column;
    justify-content: start;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 70px;
  ${media.mobile} {
    margin-top: 40px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  ${media.mobile} {
    align-items: start;
    margin-top: 24px;
  }
`;

const WebLink = styled.a`
  color: var(--color-white);
  &:hover {
    text-decoration: underline;
  }
`;

const InfoText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
`;
