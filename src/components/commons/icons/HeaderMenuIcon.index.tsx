import { IIconProps } from "./Icon.types";

interface IHeaderMenuIcon extends IIconProps {
  isHome: boolean;
}

export default function HeaderMenuIcon({ size, isHome }: IHeaderMenuIcon) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="8"
        width="32"
        height="2"
        fill={isHome ? "var(--color-white)" : "var(--color-black)"}
      />
      <rect
        y="22"
        width="32"
        height="2"
        fill={isHome ? "var(--color-white)" : "var(--color-black)"}
      />
    </svg>
  );
}
