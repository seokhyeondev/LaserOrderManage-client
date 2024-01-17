import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "@/src/components/shared/layout";
import { globalStyles } from "@/src/styles/globalStyles";
import { Roboto } from "next/font/google";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { RecoilEnv, RecoilRoot } from "recoil";
import { useState } from "react";
import AuthInitializer from "@/src/components/shared/auth/AuthInitializer.index";
import * as gtag from "@/src/lib/constants/gtags";
import Script from "next/script";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  queryClient.setDefaultOptions({
    queries: { retry: false },
    mutations: { retry: false },
  });
  gtag.useGtag();

  return (
    <>
      {process.env.NODE_ENV !== "development" && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <Global styles={globalStyles} />
            <AuthInitializer>
              <Layout className={roboto.className}>
                <Component {...pageProps} />
              </Layout>
            </AuthInitializer>
          </HydrationBoundary>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
