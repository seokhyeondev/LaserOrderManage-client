import { AppPages } from "@/src/lib/constants/appPages";
import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";
import mainLogoDark from "@/public/images/mainLogoDark.webp";
import { useRouter } from "next/router";
import Image from "next/image";

export default function MainLogoDark() {
  const router = useRouter();
  return (
    <LogoWrapper onClick={() => router.push(AppPages.HOME)}>
      <Image src={mainLogoDark} alt="메인 로고" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div``;

const LogoContainer = styled.div`
  width: 171px;
  height: 31px;
  ${media.mobile} {
    width: 107px;
    height: 20px;
  }
`;
