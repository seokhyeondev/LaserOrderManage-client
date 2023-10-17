import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "@/src/components/commons/layout";
import { globalStyles } from "@/src/commons/styles/globalStyles";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
