import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("./IntroSection"));
const PartnerSection = dynamic(() => import("./PartnerSection"));

export default function Main() {
  return (
    <>
      <IntroSection />
      <PartnerSection />
    </>
  );
}
