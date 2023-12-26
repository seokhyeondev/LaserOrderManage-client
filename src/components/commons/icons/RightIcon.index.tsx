import styled from "@emotion/styled";
import { IActiveIconProps } from "./Icon.types";

interface IArrowIconProps extends IActiveIconProps {
  onClick: () => void;
}

interface ArrowIconBoxProp {
  isActive: boolean;
}

const ArrowIconBox = styled.div<ArrowIconBoxProp>`
  cursor: ${(prop) => (prop.isActive ? "pointer" : "default")};
`;

export default function RightIcon({
  size,
  isActive,
  onClick,
}: IArrowIconProps) {
  return (
    <ArrowIconBox className="flex-center" isActive={isActive} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        id="angle-right-b"
      >
        <path
          fill={isActive ? "var(--color-primary)" : "var(--color-mediumGray)"}
          d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
        ></path>
      </svg>
    </ArrowIconBox>
  );
}
