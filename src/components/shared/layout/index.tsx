import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.index";
import { useToastify } from "@/src/lib/hooks/useToastify";
import LayoutFooter from "./footer/LayoutFooter.index";

const Body = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  right: -10px;
`;

interface ILayoutProps {
  className: string;
  children: React.JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  const { Toast } = useToastify();
  return (
    <div className={props.className}>
      <Toast />
      <LayoutHeader />
      <Body>{props.children}</Body>
      <LayoutFooter />
    </div>
  );
}
