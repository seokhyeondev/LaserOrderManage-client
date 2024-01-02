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
import { IAuthState, authState } from "@/src/store/auth";
import { setCredentials } from "@/src/lib/utils/setCredentials";
import App from "next/app";
import { axiosPrivate, makeCookieString } from "@/src/lib/apis/axios";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

type MyAppProps = AppProps & {
  loginData: IToken | null;
};

function MyApp({ Component, pageProps, loginData }: MyAppProps) {
  const initializer = ({ set }: MutableSnapshot) => {
    if (loginData) {
      const auth: IAuthState = {
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

  return (
    <>
      <RecoilRoot initializeState={initializer}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <HydrationBoundary state={pageProps.dehydratedState}>
            <Global styles={globalStyles} />
            <Layout className={roboto.className}>
              <Component {...pageProps} />
            </Layout>
          </HydrationBoundary>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  const { ctx } = context;
  let loginData: IToken | null;

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

  return { ...appProps, loginData };
};

export default MyApp;
