import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("./IntroSection"));

export default function Main() {
  return (
    <>
      <IntroSection />
    </>
  );
}
