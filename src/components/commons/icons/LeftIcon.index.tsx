import styled from "@emotion/styled";

interface IArrowIconProps {
  isActive: boolean;
  onClick: () => void;
}

interface ArrowIconBoxProp {
  isActive: boolean;
}

const ArrowIconBox = styled.div<ArrowIconBoxProp>`
  cursor: ${(prop) => (prop.isActive ? "pointer" : "default")};
`;

export default function LeftIcon(props: IArrowIconProps) {
  return (
    <ArrowIconBox
      className="flex-center"
      isActive={props.isActive}
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        viewBox="0 0 24 24"
        id="angle-left-b"
      >
        <path
          fill={
            props.isActive ? "var(--color-primary)" : "var(--color-mediumGray)"
          }
          d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"
        ></path>
      </svg>
    </ArrowIconBox>
  );
}
