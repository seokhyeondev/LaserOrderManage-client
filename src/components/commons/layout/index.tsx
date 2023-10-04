import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.index";

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <Body>{props.children}</Body>
    </>
  );
}
