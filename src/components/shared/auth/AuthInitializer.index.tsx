import { axiosPrivate } from "@/src/lib/apis/axios";
import { UserType } from "@/src/lib/apis/user/User.types";
import { authState } from "@/src/store/auth";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface IAuthInitializerProps {
  children: React.JSX.Element;
}

export default function AuthInitializer({ children }: IAuthInitializerProps) {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    const role = getCookie("role");
    if (accessToken && role) {
      axiosPrivate.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
      setAuth({
        isAuthenticated: true,
        accessToken: accessToken,
        role: role as UserType,
      });
    }
  }, [setAuth]);

  return <>{children}</>;
}
