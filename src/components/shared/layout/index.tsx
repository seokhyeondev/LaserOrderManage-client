import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.index";
import { useToastify } from "@/src/lib/hooks/useToastify";
import LayoutFooter from "./footer/LayoutFooter.index";
import { useRouter } from "next/router";
import { AppPages } from "@/src/lib/constants/appPages";

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
  const { asPath } = useRouter();
  return (
    <div className={props.className}>
      <Toast />
      {asPath !== AppPages.HOME && <LayoutHeader transparent={false} />}
      <Body>{props.children}</Body>
      <LayoutFooter />
    </div>
  );
}
