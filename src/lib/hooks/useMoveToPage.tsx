import { IAuthState } from "@/src/store/auth";
import { useRouter } from "next/router";

export const useMoveToPage = () => {
  const router = useRouter();

  const onClickMoveToPage = (path: string) => () => {
    router.push(path);
  };

  const onClickMoveWithAuth = (path: string, auth: IAuthState) => () => {
    if (!auth.isAuthenticated || auth.accessToken === "") {
      router.push("/login");
      return;
    }
    router.push(path);
  };

  return {
    onClickMoveToPage,
    onClickMoveWithAuth,
  };
};
