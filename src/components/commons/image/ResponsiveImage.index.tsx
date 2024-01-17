import styled from "@emotion/styled";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

interface IResponsiveImageProps {
  src: StaticImport;
  alt: string;
  priority?: boolean;
  position?: IResponsiveContainerPosition;
  Container: React.ComponentType<{ children: ReactNode }>;
}

type IResponsiveContainerPosition = "relative" | "absolute";

const StyledImage = styled(Image)`
  position: relative !important;
  object-fit: cover;
`;

const ResponsiveImage = ({
  src,
  alt,
  priority,
  position = "relative",
  Container,
}: IResponsiveImageProps) => {
  const StyledContinaer = styled(Container)`
    position: ${position};
  `;
  return (
    <StyledContinaer>
      <StyledImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
      />
    </StyledContinaer>
  );
};

export default ResponsiveImage;
