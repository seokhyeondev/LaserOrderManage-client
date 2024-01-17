import styled from "@emotion/styled";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

interface IResponsiveImageProps {
  src: StaticImport;
  alt: string;
  priority?: boolean;
  position?: IResponsiveContainerPosition;
  placeholder?: IStyledImagePlaceholder;
  Container: React.ComponentType<{ children: ReactNode }>;
}

type IResponsiveContainerPosition = "relative" | "absolute";
type IStyledImagePlaceholder =
  | "blur"
  | "empty"
  | `data:image/${string}`
  | undefined;

const StyledImage = styled(Image)`
  position: relative !important;
`;

const ResponsiveImage = ({
  src,
  alt,
  priority,
  position = "relative",
  placeholder = "blur",
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
        placeholder={placeholder}
      />
    </StyledContinaer>
  );
};

export default ResponsiveImage;
