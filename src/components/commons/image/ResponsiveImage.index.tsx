import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { ReactNode } from "react";

interface IResponsiveImageProps {
  src: string;
  alt: string;
  Container: React.ComponentType<{ children: ReactNode }>;
}

const defaultContainerStyle = css`
  position: relative;
`;

const StyledImage = styled(Image)`
  position: relative !important;
  object-fit: cover;
`;

const ResponsiveImage = ({ src, alt, Container }: IResponsiveImageProps) => {
  const StyledContinaer = styled(Container)`
    ${defaultContainerStyle}
  `;
  return (
    <StyledContinaer>
      <StyledImage src={src} alt={alt} layout="fill" />
    </StyledContinaer>
  );
};

export default ResponsiveImage;
