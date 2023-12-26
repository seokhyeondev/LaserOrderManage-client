import { IIconProps } from "./Icon.types";

export default function MenuIcon({ size }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      id="ellipsis-v"
    >
      <path
        fill="var(--color-darkGray)"
        d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
      ></path>
    </svg>
  );
}
