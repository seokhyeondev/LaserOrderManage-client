import type { AppContext, AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "@/src/components/commons/layout";
import { globalStyles } from "@/src/styles/globalStyles";
import { Roboto } from "next/font/google";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { MutableSnapshot, RecoilEnv, RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import { IToken } from "@/src/lib/apis/user/User.types";
import { UserApi } from "@/src/lib/apis/user/UserApi";
import { authState } from "@/src/store/auth";
import { setCredentials } from "@/src/lib/utils/setCredentials";
import { axiosPrivate, makeCookieString } from "@/src/lib/apis/axios";
import AuthInitializer from "@/src/components/units/auth/AuthInitializer.index";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

type MyAppProps = AppProps & {
  loginData: IToken | null;
};

function MyApp({ Component, pageProps, loginData }: MyAppProps) {
  const initializer = ({ set }: MutableSnapshot) => {
    if (loginData) {
      const auth = {
        isAuthenticated: true,
        accessToken: loginData.accessToken,
        role: loginData.role,
      };
      set(authState, auth);
    }
  };

  useEffect(() => {
    loginData && setCredentials(loginData);
  }, [loginData]);

  const [queryClient] = useState(() => new QueryClient());
  queryClient.setDefaultOptions({
    queries: { retry: false },
    mutations: { retry: false },
  });

  return (
    <>
      <RecoilRoot initializeState={initializer}>
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

MyApp.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  let loginData: IToken | null;
  let pageProps = {};

  try {
    if (ctx.req) {
      const cookie = ctx.req.headers.cookie;
      axiosPrivate.defaults.headers.Cookie = cookie || "";
      const token = await UserApi.REISSUE();
      loginData = token;
      ctx.res?.setHeader("set-cookie", makeCookieString(token));
    } else throw new Error("isClient");
  } catch (error) {
    loginData = null;
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, loginData };
};

export default MyApp;
