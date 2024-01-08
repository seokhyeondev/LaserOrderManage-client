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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import AuthInitializer from "@/src/components/shared/auth/AuthInitializer.index";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function MyApp({ Component, pageProps }: AppProps) {
  // const initializer = ({ set }: MutableSnapshot) => {
  //   if (loginData) {
  //     const auth = {
  //       isAuthenticated: true,
  //       accessToken: loginData.accessToken,
  //       role: loginData.role,
  //     };
  //     set(authState, auth);
  //   }
  // };

  // useEffect(() => {
  //   loginData && setCredentials(loginData);
  // }, [loginData]);

  const [queryClient] = useState(() => new QueryClient());
  queryClient.setDefaultOptions({
    queries: { retry: false },
    mutations: { retry: false },
  });

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
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

// MyApp.getInitialProps = async (context: AppContext) => {
//   const { ctx, Component } = context;
//   let loginData: IToken | null;
//   let pageProps = {};

//   try {
//     if (ctx.req) {
//       const cookie = ctx.req.headers.cookie;
//       axiosPrivate.defaults.headers.Cookie = cookie || "";
//       const token = await UserApi.REISSUE();
//       loginData = token;
//       ctx.res?.setHeader("set-cookie", makeCookieString(token));
//     } else throw new Error("isClient");
//   } catch (error) {
//     loginData = null;
//   }

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps, loginData };
// };

export default MyApp;
