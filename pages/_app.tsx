import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "@/src/components/commons/layout";
import { globalStyles } from "@/src/styles/globalStyles";
import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <main className={roboto.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </QueryClientProvider>
    </>
  );
}
