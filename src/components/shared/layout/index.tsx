import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.index";
import { useToastify } from "@/src/lib/hooks/useToastify";
import LayoutFooter from "./footer/LayoutFooter.index";
import { useRouter } from "next/router";
import { AppPages } from "@/src/lib/constants/appPages";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Body = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  right: -10px;
`;

interface ILayoutProps {
  children: React.JSX.Element;
}
export default function Layout({ children }: ILayoutProps) {
  const { Toast } = useToastify();
  const { asPath } = useRouter();
  return (
    <div className={roboto.className}>
      <Toast />
      {asPath !== AppPages.HOME && <LayoutHeader transparent={false} />}
      <Body>{children}</Body>
      <LayoutFooter />
    </div>
  );
}
