import { IIconProps } from "./Icon.types";

export default function ScrollDownIcon({ size }: IIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_20_3224)">
        <mask
          id="mask0_20_3224"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="49"
          height="48"
        >
          <path d="M48.5 0H0.5V48H48.5V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_20_3224)">
          <path
            d="M24.881 45.5811C18.1701 45.5811 12.731 40.142 12.731 33.4311V14.5311C12.731 7.82025 18.1701 2.3811 24.881 2.3811C31.5905 2.3811 37.031 7.82025 37.031 14.5311V33.4311C37.031 40.142 31.5905 45.5811 24.881 45.5811Z"
            stroke="white"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.8809 30.3436V37.0936"
            stroke="white"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_20_3224">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
