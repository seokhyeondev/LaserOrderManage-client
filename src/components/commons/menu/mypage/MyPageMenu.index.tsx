import { useRecoilValue } from "recoil";
import ClipBoardIcon from "../../icons/ClipBoardIcon.index";
import SignoutIcon from "../../icons/SignoutIcon.index";
import TruckIcon from "../../icons/TruckIcon.index";
import UserIcon from "../../icons/UserIcon.index";
import Spacer from "../../spacer/Spacer.index";
import * as S from "./MyPageMenu.styles";
import { IMyPageMenuItemProps, IMyPageMenuProps } from "./MyPageMenu.types";
import { myInfoState } from "@/src/store/myInfo";

export default function MyPageMenu({
  currentPage,
  role,
  onChangePage,
}: IMyPageMenuProps) {
  const myInfo = useRecoilValue(myInfoState);

  const signOut = () => {
    //TODO
  };

  return (
    <S.Wrapper className="flex-column">
      <S.BodyWrapper>
        <S.Name className="medium24">{`${myInfo.name} 님`}</S.Name>
        <Spacer width="100%" height="8px" />
        <S.Company className="medium16">{myInfo.company ?? "-"}</S.Company>
        <Spacer width="100%" height="56px" />
        <div>
          <MyPageMenuItem
            title="계정"
            isActive={currentPage === "Account"}
            onClick={() => onChangePage("Account")}
          >
            <UserIcon size={24} isActive={currentPage === "Account"} />
          </MyPageMenuItem>
          {role === "ROLE_CUSTOMER" && (
            <MyPageMenuItem
              title="배송지"
              isActive={currentPage === "Delivery"}
              onClick={() => onChangePage("Delivery")}
            >
              <TruckIcon size={24} isActive={currentPage === "Delivery"} />
            </MyPageMenuItem>
          )}
          {role === "ROLE_FACTORY" && (
            <MyPageMenuItem
              title="담당자 관리"
              isActive={currentPage === "MangerList"}
              onClick={() => onChangePage("MangerList")}
            >
              <ClipBoardIcon
                size={24}
                isActive={currentPage === "MangerList"}
              />
            </MyPageMenuItem>
          )}
        </div>
      </S.BodyWrapper>
      <S.SignoutWrapper className="flex-center">
        <div className="flex-row-align-center">
          <SignoutIcon size={24} />
          <Spacer width="6px" height="100%" />
          <S.SignoutTitle className="medium14" onClick={signOut}>
            로그아웃
          </S.SignoutTitle>
        </div>
      </S.SignoutWrapper>
    </S.Wrapper>
  );
}

function MyPageMenuItem({
  title,
  isActive,
  children,
  onClick,
}: IMyPageMenuItemProps) {
  return (
    <S.MenuItemWrapper className="flex-row-align-center" onClick={onClick}>
      {children}
      <Spacer width="14px" height="100%" />
      <S.MenuItemTitle className="medium16" isActive={isActive}>
        {title}
      </S.MenuItemTitle>
    </S.MenuItemWrapper>
  );
}
