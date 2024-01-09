import { IIconProps } from "./Icon.types";

interface ICheckIconProp extends IIconProps {
  isChecked: boolean;
  defaultColor: string;
}

export default function CheckIcon({
  size,
  isChecked,
  defaultColor,
}: ICheckIconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      id="check"
    >
      <path
        fill={isChecked ? "var(--color-primary)" : defaultColor}
        d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"
      ></path>
    </svg>
  );
}
