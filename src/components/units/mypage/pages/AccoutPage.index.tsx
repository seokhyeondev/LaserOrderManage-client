import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./MyPagePages.styles";
import InfoInputItem from "./items/InfoInputItem.index";
import { useState } from "react";
import { IAccoutPageProps } from "./MyPagePages.types";
import EditPasswordModal from "@/src/components/commons/modal/mypage/EditPasswordModal.index";

export default function AccountPage({ role }: IAccoutPageProps) {
  const [notify, setNotify] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const toggleNotify = () => {
    setNotify(!notify);
  };
  return (
    <>
      <S.Wrapper>
        <S.Title className="bold24">계정 설정</S.Title>
        <S.BodyWrapper>
          <div className="flex-row">
            <S.InfoWrapper>
              <InfoInputItem
                label="이메일"
                value="user1@gmail.com"
                needEdit={false}
              />
            </S.InfoWrapper>
            <Spacer width="20px" height="100%" />
            <S.InfoWrapper>
              <InfoInputItem
                label="비밀번호"
                value="user1-password"
                needEdit={true}
                hideInput={true}
                onEdit={() => setShowPasswordModal(true)}
              />
            </S.InfoWrapper>
          </div>
          <Spacer width="100%" height="20px" />
          {role === "ROLE_CUSTOMER" && (
            <S.InfosWrapper>
              <S.InfoTitle className="medium16">기본 정보</S.InfoTitle>
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="이름"
                value="김우리"
                needEdit={true}
                placeHolder="이름을 입력하세요"
                onChange={() => {}}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="휴대폰 번호"
                value="010111111111"
                needEdit={true}
                placeHolder="휴대폰 번호를 입력하세요"
                onChange={() => {}}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="주소"
                value="[01212] 경기도 안산시 단원구, 상세 주소"
                needEdit={true}
                onEdit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="업체명"
                value="우리 기술 (주)"
                needEdit={true}
                placeHolder="이름을 입력하세요"
                onChange={() => {}}
                onSubmit={() => {}}
              />
            </S.InfosWrapper>
          )}
          {role === "ROLE_FACTORY" && (
            <S.InfosWrapper>
              <S.InfoTitle className="medium16">기본 정보</S.InfoTitle>
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="상호"
                value="금오엠티 (주)"
                needEdit={true}
                placeHolder="상호를 입력하세요"
                onChange={() => {}}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="대표자 이름"
                value="대표자"
                needEdit={true}
                placeHolder="대표자 이름을 입력하세요"
                onChange={() => {}}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="대표자 번호"
                value="010222233333"
                needEdit={true}
                placeHolder="대표자 번호를 입력하세요"
                onChange={() => {}}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="FAX 번호"
                value="110-330"
                needEdit={true}
                placeHolder="FAX 번호를 입력하세요"
                onChange={() => {}}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="주소"
                value="[01212] 경기도 안산시 단원구, 상세 주소"
                needEdit={true}
                onEdit={() => {}}
              />
            </S.InfosWrapper>
          )}

          <Spacer width="100%" height="20px" />
          <S.InfoWrapper className="flex-row-between-center">
            <div>
              <S.InfoTitle className="medium16">알림 설정</S.InfoTitle>
              <Spacer width="100%" height="14px" />
              <S.InfoAnnounce className="regular14">
                이메일 계정으로 알림을 발송합니다
              </S.InfoAnnounce>
            </div>
            <S.SwitchWrapper
              className="flex-row-align-center"
              isActive={notify}
              onClick={toggleNotify}
            >
              <S.Switch isActive={notify}></S.Switch>
            </S.SwitchWrapper>
          </S.InfoWrapper>
        </S.BodyWrapper>
      </S.Wrapper>
      {showPasswordModal && (
        <EditPasswordModal
          isOpen={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
        />
      )}
    </>
  );
}
