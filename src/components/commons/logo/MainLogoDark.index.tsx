import { AppPages } from "@/src/lib/constants/appPages";
import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";
import ResponsiveImage from "../image/ResponsiveImage.index";
import mainLogoDark from "@/public/images/mainLogoDark.webp";

export default function MainLogoDark() {
  return (
    <Link href={AppPages.HOME}>
      <ResponsiveImage
        src={mainLogoDark}
        alt="메인 로고"
        Container={LogoContainer}
        blur
      />
    </Link>
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
