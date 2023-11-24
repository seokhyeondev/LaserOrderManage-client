import styled from "@emotion/styled";

interface ISpacerProps {
  width: string;
  height: string;
}

const Space = styled.div`
  width: ${(props: ISpacerProps) => props.width};
  height: ${(props: ISpacerProps) => props.height};
`;

export default function Spacer(props: ISpacerProps) {
  return <Space width={props.width} height={props.height} />;
}
