import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

interface IResponsiveImageProps {
  src: string | StaticImport;
  alt: string;
  priority?: boolean;
  blur?: boolean;
  Container: React.ComponentType<{ children: ReactNode }>;
}

const defaultContainerStyle = css`
  position: relative;
`;

const StyledImage = styled(Image)`
  position: relative !important;
  object-fit: cover;
`;

const ResponsiveImage = ({
  src,
  alt,
  Container,
  priority,
  blur,
}: IResponsiveImageProps) => {
  const StyledContinaer = styled(Container)`
    ${defaultContainerStyle}
  `;
  return (
    <StyledContinaer>
      <StyledImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        placeholder={blur ? "blur" : undefined}
      />
    </StyledContinaer>
  );
};

export default ResponsiveImage;
