import dynamic from "next/dynamic";
import KumohHead from "../../shared/layout/head/NextHead.index";

const IntroSection = dynamic(() => import("./IntroSection"));
const PartnerSection = dynamic(() => import("./PartnerSection"));
const OrderProcessSection = dynamic(() => import("./OrderProcessSection"));
const PortfolioSection = dynamic(() => import("./PortfolioSection"));
const VideoSection = dynamic(() => import("./VideoSection"));
const NewsSection = dynamic(() => import("./NewsSection"));

export default function Main() {
  return (
    <>
      <KumohHead
        title="금오거래센터"
        additional={
          <meta property="og:image" content="/images/order_process4.png" />
        }
      />
      <IntroSection />
      <PartnerSection />
      <OrderProcessSection />
      <PortfolioSection />
      <VideoSection />
      <NewsSection />
    </>
  );
}
