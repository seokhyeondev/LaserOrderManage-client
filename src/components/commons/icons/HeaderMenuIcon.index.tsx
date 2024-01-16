import { IIconProps } from "./Icon.types";

interface IHeaderMenuIcon extends IIconProps {
  transparent: boolean;
}

export default function HeaderMenuIcon({ size, transparent }: IHeaderMenuIcon) {
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
        fill={transparent ? "var(--color-white)" : "var(--color-black)"}
      />
      <rect
        y="22"
        width="32"
        height="2"
        fill={transparent ? "var(--color-white)" : "var(--color-black)"}
      />
    </svg>
  );
}
