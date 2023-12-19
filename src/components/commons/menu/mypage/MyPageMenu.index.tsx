import ClipBoardIcon from "../../icons/ClipBoardIcon.index";
import SignoutIcon from "../../icons/SignoutIcon.index";
import TruckIcon from "../../icons/TruckIcon.index";
import UserIcon from "../../icons/UserIcon.index";
import Spacer from "../../spacer/Spacer.index";
import * as S from "./MyPageMenu.styles";
import { IMyPageMenuItemProps } from "./MyPageMenu.types";

export default function MyPageMenu() {
  return (
    <S.Wrapper className="flex-column">
      <S.BodyWrapper>
        <S.Name className="medium24">김우리 님</S.Name>
        <Spacer width="100%" height="8px" />
        <S.Company className="medium16">금오엠티 (주)</S.Company>
        <Spacer width="100%" height="56px" />
        <div>
          <MyPageMenuItem title="계정" isActive={true} onClick={() => {}}>
            <UserIcon size={24} isActive={true} />
          </MyPageMenuItem>
          <MyPageMenuItem title="배송지" isActive={true} onClick={() => {}}>
            <TruckIcon size={24} isActive={true} />
          </MyPageMenuItem>
          <MyPageMenuItem
            title="담당자 관리"
            isActive={true}
            onClick={() => {}}
          >
            <ClipBoardIcon size={24} isActive={true} />
          </MyPageMenuItem>
        </div>
      </S.BodyWrapper>
      <S.SignoutWrapper className="flex-center">
        <div className="flex-row-align-center">
          <SignoutIcon size={24} />
          <Spacer width="6px" height="100%" />
          <S.SignoutTitle className="medium14">로그아웃</S.SignoutTitle>
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
