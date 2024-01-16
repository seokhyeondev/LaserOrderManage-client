import { AppPages } from "@/src/lib/constants/appPages";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    router.replace(AppPages.HOME);
  }, []);
  return null;
}
