import styled from "@emotion/styled";

const Body = styled.div``;

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Body>{props.children}</Body>
    </>
  );
}
