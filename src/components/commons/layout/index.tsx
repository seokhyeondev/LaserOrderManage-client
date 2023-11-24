import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.index";
import { useToastify } from "@/src/lib/hooks/useToastify";

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  const { Toast } = useToastify();
  return (
    <>
      <Toast />
      <LayoutHeader />
      <Body>{props.children}</Body>
    </>
  );
}
