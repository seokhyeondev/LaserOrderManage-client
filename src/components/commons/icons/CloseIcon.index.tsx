import { IIconProps } from "./Icon.types";

interface ICloseIconProps extends IIconProps {
  onClick: () => void;
}

export default function CloseIcon({ size, onClick }: ICloseIconProps) {
  return (
    <a onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5.39355"
          y="3.97919"
          width="32"
          height="2"
          transform="rotate(45 5.39355 3.97919)"
          fill="black"
        />
        <rect
          x="28.021"
          y="5.3934"
          width="32"
          height="2"
          transform="rotate(135 28.021 5.3934)"
          fill="black"
        />
      </svg>
    </a>
  );
}
