import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./MyPagePages.styles";
import InfoInputItem from "./items/InfoInputItem.index";
import { useEffect, useState } from "react";
import { IAccoutPageProps } from "./MyPagePages.types";
import EditPasswordModal from "@/src/components/commons/modal/mypage/EditPasswordModal.index";
import EditAddressModal from "@/src/components/commons/modal/mypage/EditAddressModal.index";
import { useQuery } from "@tanstack/react-query";
import { CustomerApi } from "@/src/lib/apis/user/customer/CustomerApi";
import { FactoryApi } from "@/src/lib/apis/user/factory/FactoryApi";
import {
  useInput,
  useInputWithMaxLength,
  useInputWithRegex,
} from "@/src/lib/hooks/useInput";
import { numberRegex } from "@/src/lib/constants/regex";
import { getFullAddress } from "@/src/lib/utils/utils";
import { useSetRecoilState } from "recoil";
import { myInfoState } from "@/src/store/myInfo";

export default function AccountPage({ role }: IAccoutPageProps) {
  const nameArgs = useInputWithMaxLength(20);
  const [phone, onChangePhone, setPhone] = useInputWithRegex(numberRegex, "");
  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [company, onChangeCompany, setCompany] = useInput();
  const [fax, onChangeFax, setFax] = useInput();
  const [notify, setNotify] = useState(false);

  const setMyInfo = useSetRecoilState(myInfoState);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  const { data: customerAccount, isSuccess: customerSuccess } = useQuery({
    queryKey: ["customerAccount"],
    queryFn: () => CustomerApi.GET_ACCOUNT_INFO(),
    enabled: role === "ROLE_CUSTOMER",
  });

  useEffect(() => {
    if (customerAccount) {
      nameArgs.setValue(customerAccount.name);
      setPhone(customerAccount.phone);
      setZoneCode(customerAccount.zipCode);
      setAddress(customerAccount.address);
      setDetailAddress(customerAccount.detailAddress ?? "");
      setCompany(customerAccount.companyName ?? "");
      setNotify(customerAccount.emailNotifiaction);
      setMyInfo({
        name: customerAccount.name,
        company: customerAccount.companyName,
      });
    }
  }, [customerSuccess]);

  const { data: factoryAccount, isSuccess: factorySuccess } = useQuery({
    queryKey: ["factoryAccount"],
    queryFn: () => FactoryApi.GET_ACCOUNT_INFO(),
    enabled: role === "ROLE_FACTORY",
  });

  useEffect(() => {
    if (factoryAccount) {
      setCompany(factoryAccount.companyName);
      nameArgs.setValue(factoryAccount.representative);
      setPhone(factoryAccount.phone);
      setFax(factoryAccount.fax);
      setZoneCode(factoryAccount.zipCode);
      setAddress(factoryAccount.address);
      setDetailAddress(factoryAccount.detailAddress ?? "");
      setNotify(factoryAccount.emailNotification);
      setMyInfo({
        name: "관리자",
        company: factoryAccount.companyName,
      });
    }
  }, [factorySuccess]);

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
              {role === "ROLE_CUSTOMER" && customerAccount && (
                <InfoInputItem
                  label="이메일"
                  value={customerAccount.email}
                  needEdit={false}
                />
              )}
              {role === "ROLE_FACTORY" && factoryAccount && (
                <InfoInputItem
                  label="이메일"
                  value={factoryAccount.email}
                  needEdit={false}
                />
              )}
            </S.InfoWrapper>
            <Spacer width="20px" height="100%" />
            <S.InfoWrapper>
              <InfoInputItem
                label="비밀번호"
                value="********"
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
                value={nameArgs.value}
                needEdit={true}
                placeHolder="이름을 입력하세요"
                onChange={nameArgs.onChange}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="휴대폰 번호"
                value={phone}
                needEdit={true}
                placeHolder="휴대폰 번호를 입력하세요"
                onChange={onChangePhone}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="주소"
                value={getFullAddress(zoneCode, address, detailAddress)}
                needEdit={true}
                onEdit={() => setShowAddressModal(true)}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="업체명"
                value={company}
                needEdit={true}
                placeHolder="업체명을 입력하세요"
                onChange={onChangeCompany}
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
                value={company}
                needEdit={true}
                placeHolder="상호를 입력하세요"
                onChange={onChangeCompany}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="대표자 이름"
                value={nameArgs.value}
                needEdit={true}
                placeHolder="대표자 이름을 입력하세요"
                onChange={nameArgs.onChange}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="대표자 번호"
                value={phone}
                needEdit={true}
                placeHolder="대표자 번호를 입력하세요"
                onChange={onChangePhone}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="FAX 번호"
                value={fax}
                needEdit={true}
                placeHolder="FAX 번호를 입력하세요"
                onChange={onChangeFax}
                onSubmit={() => {}}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="주소"
                value={getFullAddress(zoneCode, address, detailAddress)}
                needEdit={true}
                onEdit={() => setShowAddressModal(true)}
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
      <EditPasswordModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />
      <EditAddressModal
        isOpen={showAddressModal}
        onClose={() => setShowAddressModal(false)}
      />
    </>
  );
}
