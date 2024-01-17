import { AppPages } from "@/src/lib/constants/appPages";
import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

interface IMainLogoProps {
  transparent: boolean;
  onClick?: () => void;
}

export default function MainLogo({ transparent, onClick }: IMainLogoProps) {
  return (
    <>
      <PcLogo onClick={onClick}>
        <Link href={AppPages.HOME}>
          <Image
            width={161}
            height={31}
            src={
              transparent
                ? "/images/mainLogoGray.webp"
                : "/images/mainLogo.webp"
            }
            alt="메인 로고"
            placeholder="blur"
            blurDataURL={
              transparent
                ? "/images/mainLogoGray.webp"
                : "/images/mainLogo.webp"
            }
          />
        </Link>
      </PcLogo>
      <MoblieLogo onClick={onClick}>
        <Link href={AppPages.HOME}>
          <Image
            width={107}
            height={20}
            src={
              transparent
                ? "/images/mainLogoGray.webp"
                : "/images/mainLogo.webp"
            }
            alt="메인 로고"
            placeholder="blur"
            blurDataURL={
              transparent
                ? "/images/mainLogoGray.webp"
                : "/images/mainLogo.webp"
            }
          />
        </Link>
      </MoblieLogo>
    </>
  );
}

const PcLogo = styled.div`
  ${media.mobile} {
    display: none;
  }
`;

const MoblieLogo = styled.div`
  display: none;
  ${media.mobile} {
    display: block;
  }
`;
