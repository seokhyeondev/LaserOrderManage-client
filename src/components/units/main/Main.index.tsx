import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("./IntroSection"));
const PartnerSection = dynamic(() => import("./PartnerSection"));
const OrderProcessSection = dynamic(() => import("./OrderProcessSection"));

export default function Main() {
  return (
    <>
      <IntroSection />
      <PartnerSection />
      <OrderProcessSection />
    </>
  );
}
