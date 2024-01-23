import Head from "next/head";
import React from "react";

interface IKumohHeadProps {
  title?: string;
  description?: string;
  additional?: React.JSX.Element;
}

const KumohHead = ({ title, description, additional }: IKumohHeadProps) => {
  return (
    <Head>
      <title>{title || "금오거래센터 - 레이저가공 & 제작의 시작"}</title>
      <meta
        name="description"
        content={
          description ||
          "금오거래센터에서 업계 최고 기술력과 대량의 레이저 가공머신을 보유한 금오레이저에 제작을 요청하세요. 넓은 공간, 절곡기, 로봇용접기, 대량의 레이저 기기를 통해 시제품부터 양산까지 책임져드립니다."
        }
      />
      <meta
        property="og:title"
        content={title || "금오거래센터 - 레이저가공 & 제작의 시작"}
      />
      <meta
        property="og:description"
        content={
          description ||
          "금오거래센터에서 업계 최고 기술력과 대량의 레이저 가공머신을 보유한 금오레이저에 제작을 요청하세요. 넓은 공간, 절곡기, 로봇용접기, 대량의 레이저 기기를 통해 시제품부터 양산까지 책임져드립니다."
        }
      />
      <meta
        name="viewport"
        content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/icons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/icons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/icons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/icons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/icons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/icons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/icons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/icons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/icons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      {additional}
    </Head>
  );
};

export default KumohHead;
