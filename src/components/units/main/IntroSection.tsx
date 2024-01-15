import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";
import LayoutHeader from "../../shared/layout/header/LayoutHeader.index";
import { keyframes } from "@emotion/react";
import ScrollDownIcon from "../../commons/icons/ScrollDownIcon.index";
import { useRecoilValue } from "recoil";
import { authState } from "@/src/store/auth";
import { AppPages } from "@/src/lib/constants/appPages";
import { useRouter } from "next/router";

const IntroSection = () => {
  const auth = useRecoilValue(authState);
  const router = useRouter();
  const path =
    auth.role === "ROLE_CUSTOMER"
      ? AppPages.CUSTOMER_CREATE_ORDER
      : AppPages.LOGIN;
  return (
    <Wrapper>
      <Overlay />
      <LayoutHeader transparent />
      <IntroWapper>
        <IntroContent>
          <Title>레이저 가공의 모든것</Title>
          <Intro>
            고객 만족과 최고의 품질로 세계일류 제품생산, 불량률 제로에
            도전하겠습니다.
          </Intro>
          <Intro>
            언제나 고객의 소리에 귀기울이며, 고객 만족을 위해 최선을 다하는
            기업이 되겠습니다.
          </Intro>
          <Button className="bold20" onClick={() => router.push(path)}>
            견적 요청하기
          </Button>
        </IntroContent>
      </IntroWapper>
      <IconWrapper className="flex-column-center">
        <ScrollText>SCROLL DOWN</ScrollText>
        <ScrollIconWrapper>
          <ScrollDownIcon size={48} />
        </ScrollIconWrapper>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 940px;
  background-image: url("/images/introImage.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  ${media.mobile} {
    height: 670px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const IntroWapper = styled.div`
  position: relative;
  z-index: 2;
  ${media.pc} {
    padding-inline: 240px;
  }
  ${media.tablet} {
    padding-inline: 80px;
  }
  ${media.mobile} {
    padding-inline: 24px;
  }
`;

const IntroContent = styled.div`
  ${media.pc} {
    margin-top: 224px;
  }
  ${media.tablet} {
    margin-top: 214px;
  }
  ${media.mobile} {
    margin-top: 256px;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  color: var(--color-white);
  margin-bottom: 32px;
  ${media.mobile} {
    font-size: 38px;
    margin-bottom: 16px;
  }
`;

const Intro = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  ${media.mobile} {
    font-size: 16px;
    max-width: 300px;
    &:last-of-type {
      display: none;
    }
  }
`;

const Button = styled.button`
  width: 222px;
  height: 72px;
  margin-top: 40px;
  background-color: transparent;
  color: var(--color-white);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: var(--border-radius);
  ${media.mobile} {
    width: 172px;
    height: 56px;
    margin-top: 32px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  ${media.mobile} {
    display: none;
  }
`;

const ScrollText = styled.p`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3.6px;
  margin-bottom: 24px;
  color: var(--color-white);
`;

const scrollAnimation = keyframes`
    0%, 100% { transform: translateY(0) }
    50% { transform: translateY(-10px) }
`;

const ScrollIconWrapper = styled.div`
  animation: ${scrollAnimation} 2s ease-in-out infinite;
`;

export default IntroSection;
