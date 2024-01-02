import { UserApi } from "@/src/lib/apis/user/UserApi";
import { useMutation } from "@tanstack/react-query";

export default function Home() {
  const { mutate } = useMutation({
    mutationFn: UserApi.REISSUE,
    retry: 0,
  });
  return <a onClick={() => mutate()}>hello</a>;
}
