import { useMoveToPage } from "@/src/lib/hooks/useMoveToPage";
import * as S from "./LayoutHeader.styles";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { authState } from "@/src/store/auth";
import { useMutation } from "@tanstack/react-query";
import { UserApi } from "@/src/lib/apis/user/UserApi";
import { AxiosError } from "axios";

const NAVIGATION_MENU_DEFAULT = [
  { name: "견적 요청하기", page: "/" },
  { name: "거래 목록", page: "/customer/order" },
  { name: "신규 거래 목록", page: "/factory/order/new" },
  { name: "거래 내역", page: "/factory/order" },
];

const NAVIGATION_MENU_FACTORY = [
  { name: "신규 거래 목록", page: "/factory/order/new" },
  { name: "거래 내역", page: "/factory/order" },
];

export default function LayoutHeader() {
  const auth = useRecoilValue(authState);
  const { onClickMoveToPage, onClickMoveWithAuth } = useMoveToPage();

  const { mutate } = useMutation({
    mutationFn: UserApi.REISSUE,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.LogoWrapper>
          <Image
            width={180}
            height={33}
            src="/images/mainLogo.jpg"
            alt="메인 로고"
            onClick={onClickMoveToPage("/")}
          />
        </S.LogoWrapper>
        <S.MenuWrapper>
          {auth.role !== "ROLE_FACTORY"
            ? NAVIGATION_MENU_DEFAULT.map((el) => (
                <S.MenuItem
                  key={el.page}
                  className="medium20"
                  onClick={onClickMoveWithAuth(el.page, auth)}
                >
                  {el.name}
                </S.MenuItem>
              ))
            : NAVIGATION_MENU_FACTORY.map((el) => (
                <S.MenuItem
                  key={el.page}
                  className="medium20"
                  onClick={onClickMoveWithAuth(el.page, auth)}
                >
                  {el.name}
                </S.MenuItem>
              ))}
        </S.MenuWrapper>
      </S.InnerWrapper>
      <button onClick={() => mutate()}>테스트 버튼</button>
      <S.HeaderButton
        className="bold16"
        onClick={
          auth.isAuthenticated
            ? onClickMoveToPage("/login")
            : onClickMoveToPage("/login")
        }
      >
        {auth.isAuthenticated ? "마이페이지" : "로그인"}
      </S.HeaderButton>
    </S.Wrapper>
  );
}
