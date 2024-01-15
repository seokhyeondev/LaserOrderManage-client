import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("./IntroSection"));
const PartnerSection = dynamic(() => import("./PartnerSection"));
const OrderProcessSection = dynamic(() => import("./OrderProcessSection"));
const PortfolioSection = dynamic(() => import("./PortfolioSection"));
const VideoSection = dynamic(() => import("./VideoSection"));

export default function Main() {
  return (
    <>
      <IntroSection />
      <PartnerSection />
      <OrderProcessSection />
      <PortfolioSection />
      <VideoSection />
    </>
  );
}
