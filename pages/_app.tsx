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
import { IToken } from "@/src/lib/apis/user/User.types";
import { UserApi } from "@/src/lib/apis/user/UserApi";
import { IAuthState, authState } from "@/src/store/auth";
import { useEffect, useState } from "react";
import { setCredentials } from "@/src/lib/utils/setCredentials";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

interface _AppProps extends AppProps {
  token: IToken | null;
}

export default function App({ Component, pageProps, token }: _AppProps) {
  const initializer = ({ set }: MutableSnapshot) => {
    if (token) {
      const auth: IAuthState = {
        isAuthenticated: true,
        accessToken: token.accessToken,
        role: token.role,
      };
      set(authState, auth);
    }
  };

  useEffect(() => {
    token && setCredentials(token);
  }, [token]);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <RecoilRoot initializeState={initializer}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <HydrationBoundary state={pageProps.dehydratedState} />
          <Global styles={globalStyles} />
          <Layout className={roboto.className}>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  let pageProps = {};
  let token: IToken | null;

  try {
    if (ctx.req) {
      const response = await UserApi.REISSUE();
      token = response;
    } else throw new Error("isClient");
  } catch (err) {
    token = null;
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, token };
};
