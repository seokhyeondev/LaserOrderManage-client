import { AppPages } from "@/src/lib/constants/appPages";
import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";
import ResponsiveImage from "../image/ResponsiveImage.index";
import mainLogo from "@/public/images/mainLogo.webp";
import mainLogoGray from "@/public/images/mainLogoGray.webp";
import { useRouter } from "next/router";

interface IMainLogoProps {
  transparent: boolean;
  onClick?: () => void;
}

export default function MainLogo({ transparent, onClick }: IMainLogoProps) {
  const router = useRouter();
  const onLogo = () => {
    if (onClick) {
      onClick();
      return;
    }
    router.push(AppPages.HOME);
  };
  return (
    <LogoWrapper onClick={onLogo}>
      <ResponsiveImage
        src={transparent ? mainLogoGray : mainLogo}
        alt="메인 로고"
        Container={LogoContainer}
        priority
      />
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
