import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./MyPagePages.styles";
import InfoInputItem from "./items/InfoInputItem.index";
import { useEffect, useState } from "react";
import { IAccoutPageProps } from "./MyPagePages.types";
import EditPasswordModal from "@/src/components/commons/modal/mypage/EditPasswordModal.index";
import EditAddressModal from "@/src/components/commons/modal/mypage/EditAddressModal.index";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CustomerApi } from "@/src/lib/apis/user/customer/CustomerApi";
import { FactoryApi } from "@/src/lib/apis/user/factory/FactoryApi";
import {
  useInputWithMaxLength,
  useInputWithRegex,
} from "@/src/lib/hooks/useInput";
import { numberRegex } from "@/src/lib/constants/regex";
import { getFullAddress } from "@/src/lib/utils/utils";
import { useSetRecoilState } from "recoil";
import { myInfoState } from "@/src/store/myInfo";
import { UserApi } from "@/src/lib/apis/user/UserApi";
import { useToastify } from "@/src/lib/hooks/useToastify";
import {
  ICustomerUser,
  IEditCustomerAccountRequest,
} from "@/src/lib/apis/user/customer/Customer.types";
import {
  IEditFactoryRequest,
  IFactoryUser,
} from "@/src/lib/apis/user/factory/Factory.types";
import WithDrawModal from "@/src/components/commons/modal/mypage/WithDrawModal.index";

export default function AccountPage({ role }: IAccoutPageProps) {
  const nameArgs = useInputWithMaxLength(10);
  const [phone, onChangePhone, setPhone] = useInputWithRegex(numberRegex, "");
  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const companyArgs = useInputWithMaxLength(20);
  const [fax, onChangeFax, setFax] = useInputWithRegex(numberRegex, "");
  const [notify, setNotify] = useState(false);
  const setMyInfo = useSetRecoilState(myInfoState);
  const { setToast } = useToastify();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showWithDrawModal, setShowWithDrawModal] = useState(false);

  const {
    data: customerAccount,
    isFetching: customerFetching,
    refetch: customerRefetch,
  } = useQuery({
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
      companyArgs.setValue(customerAccount.companyName ?? "");
      setNotify(customerAccount.emailNotification);
      setMyInfo({
        name: customerAccount.name,
        company: customerAccount.companyName,
      });
    }
  }, [customerAccount, customerFetching]);

  const {
    data: factoryAccount,
    isFetching: factoryFetching,
    refetch: factoryRefetch,
  } = useQuery({
    queryKey: ["factoryAccount"],
    queryFn: () => FactoryApi.GET_ACCOUNT_INFO(),
    enabled: role === "ROLE_FACTORY",
  });

  useEffect(() => {
    if (factoryAccount) {
      companyArgs.setValue(factoryAccount.companyName);
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
  }, [factoryAccount, factoryFetching]);

  const { mutate: patchCustomerAccount } = useMutation({
    mutationFn: CustomerApi.EDIT_ACCOUNT_INFO,
  });

  const onEditCustomerAccount = (label: string, user?: ICustomerUser) => {
    const customerUser: ICustomerUser = {
      phone: phone.trim(),
      zipCode: zoneCode,
      address: address,
      detailAddress: detailAddress.trim() !== "" ? detailAddress.trim() : null,
    };
    const payload: IEditCustomerAccountRequest = {
      name: nameArgs.value.trim(),
      companyName: companyArgs.value.trim(),
      user: user ?? customerUser,
    };
    const diffCnt = countDiffCustomerAccount(payload);
    if (diffCnt === 0) return;
    patchCustomerAccount(payload, {
      onSuccess: () => {
        setToast({
          comment:
            diffCnt > 1
              ? `${label} 외 ${diffCnt - 1}개를 변경했어요`
              : `${label}을 변경했어요`,
        });
        customerRefetch();
      },
      onError: () => {
        setToast({
          comment:
            diffCnt > 1
              ? `${label} 외 ${diffCnt - 1}개 변경에 실패했어요`
              : `${label} 변경에 실패했어요`,
        });
        customerRefetch();
      },
    });
  };

  const countDiffCustomerAccount = (payload: IEditCustomerAccountRequest) => {
    let count = 0;
    const account = customerAccount!!;
    if (account.name !== payload.name) count++;
    if (account.companyName !== payload.companyName) count++;
    if (account.phone !== payload.user.phone) count++;
    if (
      account.zipCode !== payload.user.zipCode ||
      account.address !== payload.user.address ||
      account.detailAddress !== payload.user.detailAddress
    )
      count++;
    return count;
  };

  const { mutate: patchFactoryAccount } = useMutation({
    mutationFn: FactoryApi.EDIT_ACCOUNT_INFO,
  });

  const onEditFactoryAccount = (label: string, user?: IFactoryUser) => {
    const factoryUser: IFactoryUser = {
      phone: phone.trim(),
      zipCode: zoneCode,
      address: address,
      detailAddress: detailAddress !== "" ? detailAddress.trim() : null,
    };
    const payload: IEditFactoryRequest = {
      companyName: companyArgs.value.trim(),
      representative: nameArgs.value.trim(),
      fax: fax.trim(),
      user: user ?? factoryUser,
    };
    const diffCnt = countDiffFactoryAccount(payload);
    if (diffCnt === 0) return;
    patchFactoryAccount(payload, {
      onSuccess: () => {
        setToast({
          comment:
            diffCnt > 1
              ? `${label} 외 ${diffCnt - 1}개를 변경했어요`
              : `${label}을 변경했어요`,
        });
        factoryRefetch();
      },
      onError: () => {
        setToast({
          comment:
            diffCnt > 1
              ? `${label} 외 ${diffCnt - 1}개 변경에 실패했어요`
              : `${label} 변경에 실패했어요`,
        });
        factoryRefetch();
      },
    });
  };

  const countDiffFactoryAccount = (payload: IEditFactoryRequest) => {
    let count = 0;
    const account = factoryAccount!!;
    if (account.companyName !== payload.companyName) count++;
    if (account.representative !== payload.representative) count++;
    if (account.fax !== payload.fax) count++;
    if (
      account.zipCode !== payload.user.zipCode ||
      account.address !== payload.user.address ||
      account.detailAddress !== payload.user.detailAddress
    )
      count++;
    return count;
  };

  const onEditAddress = (
    zoneCode: string,
    address: string,
    detailAddress: string,
  ) => {
    if (role === "ROLE_CUSTOMER") {
      const user: ICustomerUser = {
        phone: phone.trim(),
        zipCode: zoneCode,
        address: address,
        detailAddress: detailAddress !== "" ? detailAddress.trim() : null,
      };
      onEditCustomerAccount("주소", user);
    }
    if (role === "ROLE_FACTORY") {
      const user: IFactoryUser = {
        phone: phone.trim(),
        zipCode: zoneCode,
        address: address,
        detailAddress: detailAddress !== "" ? detailAddress.trim() : null,
      };
      onEditFactoryAccount("주소", user);
    }
  };

  const [patchNotifySending, setPatchNotifySending] = useState(false);

  const { mutate: patchNotify } = useMutation({
    mutationFn: UserApi.PATCH_NOTIFICATION,
    onError: () => {
      setPatchNotifySending(false);
      setToast({ comment: "알림 설정 변경에 실패했어요" });
    },
  });

  const toggleNotify = () => {
    if (patchNotifySending) return;
    const newStatus = !notify;
    setPatchNotifySending(true);
    patchNotify(newStatus, {
      onSuccess: () => {
        setPatchNotifySending(false);
        setNotify(newStatus);
        setToast({
          comment: newStatus ? "알림을 설정했어요" : "알림을 해제했어요",
        });
      },
    });
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
                onSubmit={() => onEditCustomerAccount("이름")}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="휴대폰 번호"
                value={phone}
                needEdit={true}
                maxLength={11}
                placeHolder="휴대폰 번호를 입력하세요"
                onChange={onChangePhone}
                onSubmit={() => onEditCustomerAccount("휴대폰 번호")}
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
                value={companyArgs.value}
                needEdit={true}
                placeHolder="업체명을 입력하세요"
                onChange={companyArgs.onChange}
                onSubmit={() => onEditCustomerAccount("업체명")}
              />
            </S.InfosWrapper>
          )}
          {role === "ROLE_FACTORY" && (
            <S.InfosWrapper>
              <S.InfoTitle className="medium16">기본 정보</S.InfoTitle>
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="상호"
                value={companyArgs.value}
                needEdit={true}
                placeHolder="상호를 입력하세요"
                onChange={companyArgs.onChange}
                onSubmit={() => onEditFactoryAccount("상호")}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="대표자 이름"
                value={nameArgs.value}
                needEdit={true}
                placeHolder="대표자 이름을 입력하세요"
                onChange={nameArgs.onChange}
                onSubmit={() => onEditFactoryAccount("대표자 이름")}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="대표자 번호"
                value={phone}
                needEdit={true}
                maxLength={11}
                placeHolder="대표자 번호를 입력하세요"
                onChange={onChangePhone}
                onSubmit={() => onEditFactoryAccount("대표자 번호")}
              />
              <Spacer width="100%" height="24px" />
              <InfoInputItem
                label="FAX 번호"
                value={fax}
                needEdit={true}
                maxLength={11}
                placeHolder="FAX 번호를 입력하세요"
                onChange={onChangeFax}
                onSubmit={() => onEditFactoryAccount("FAX 번호")}
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
          <Spacer width="100%" height="20px" />
          <S.InfoWrapper className="flex-row-between-center">
            <div>
              <S.InfoTitle className="medium16">회원 탈퇴</S.InfoTitle>
              <Spacer width="100%" height="14px" />
              <S.InfoAnnounce className="regular14">
                금오거래센터에서 탈퇴합니다
              </S.InfoAnnounce>
            </div>
            <S.WithDrawButton
              className="regular14"
              onClick={() => setShowWithDrawModal(true)}
            >
              탈퇴
            </S.WithDrawButton>
          </S.InfoWrapper>
        </S.BodyWrapper>
      </S.Wrapper>
      <EditPasswordModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />
      <EditAddressModal
        isOpen={showAddressModal}
        initData={{
          zoneCode: zoneCode,
          address: address,
          detailAddress: detailAddress,
        }}
        onClose={() => setShowAddressModal(false)}
        onEdit={onEditAddress}
      />
      <WithDrawModal
        isOpen={showWithDrawModal}
        onClose={() => setShowWithDrawModal(false)}
      />
    </>
  );
}
