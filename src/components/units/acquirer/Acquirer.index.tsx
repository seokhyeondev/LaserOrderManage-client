import { useRef, useState } from "react";
import RedoIcon from "../../commons/icons/RedoIcon.index";
import Spacer from "../../commons/spacer/Spacer.index";
import * as S from "./Acquirer.styles";
import SignitureCanvas from "react-signature-canvas";
import { useInput, useInputWithRegex } from "@/src/lib/hooks/useInput";
import { numberRegex, phoneRegex } from "@/src/lib/constants/regex";
import { useRouter } from "next/router";
import { useToastify } from "@/src/lib/hooks/useToastify";
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";
import { GetServerSideProps } from "next";
import { setSsrAxiosHeader } from "@/src/lib/utils/setSsrAxiosHeader";
import { AppPages } from "@/src/lib/constants/appPages";
import { OrderDetailApi } from "@/src/lib/apis/order/detail/OrderDetailApi";
import KumohHead from "../../shared/layout/head/NextHead.index";
import { getCustomerInfo, getPhoneNumber } from "@/src/lib/utils/utils";

type Acquirer = {
  name: string;
  phone: string;
};

export default function Acquirer() {
  const router = useRouter();
  const { orderId } = router.query;
  const [name, onChangeName] = useInput();
  const [phone, onChangePhone] = useInputWithRegex(numberRegex, "");
  const canvasRef = useRef<any>(null);
  const [isSigned, setIsSign] = useState(false);
  const [apiSending, setApiSending] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const { setToast } = useToastify();
  const isSubmitAvailable =
    name !== "" &&
    name.length <= 10 &&
    phone !== "" &&
    phoneRegex.test(phone) &&
    isSigned &&
    !isSubmit;

  const { data: customerData } = useQuery({
    queryKey: [`order/${orderId}/customer`],
    queryFn: () => OrderApi.GET_ORDER_CUSTOMER_INFO(String(orderId)),
  });
  const { data: fileData } = useQuery({
    queryKey: [`order/${orderId}/file`],
    queryFn: () => OrderApi.GET_PURCHASE_ORDER_FILE(String(orderId)),
  });

  const onResetSignature = () => {
    if (!isSubmit) {
      canvasRef.current.clear();
      setIsSign(false);
    }
  };

  const createSignatureFile = () => {
    const dataURL = canvasRef.current.toDataURL("image/png");
    const decodedURL = dataURL.replace(/^data:image\/\w+;base64,/, "");
    const buf = Buffer.from(decodedURL, "base64");
    const blob = new Blob([buf], { type: "image/png" });
    return new File([blob], "signature.png", { type: "image/png" });
  };

  const createAcquirerBlob = () => {
    const acquirer: Acquirer = {
      name: name.trim(),
      phone: phone.trim(),
    };
    return new Blob([JSON.stringify(acquirer)], {
      type: "application/json",
    });
  };

  const { mutate } = useMutation({
    mutationFn: OrderDetailApi.ACCEPT_COMPLETED,
    onSuccess: () => {
      setApiSending(false);
      setIsSubmit(true);
      canvasRef.current.off();
      setToast({ comment: "서명을 완료했어요" });
    },
    onError: () => {
      setApiSending(false);
      setToast({ comment: "서명에 실패했어요" });
    },
  });

  const onSubmit = () => {
    if (apiSending) return;
    setApiSending(true);
    const payload = new FormData();
    payload.append("file", createSignatureFile());
    payload.append("acquirer", createAcquirerBlob());
    mutate({ id: String(orderId), payload: payload });
  };

  return (
    <>
      <KumohHead title="인수자 서명하기 | 금오거래센터" />
      <S.Wrapper>
        <S.Title className="bold24">인수자 서명하기</S.Title>
        <Spacer width="100%" height="64px" />
        {customerData && fileData && (
          <>
            <S.Label className="regular16">거래명</S.Label>
            <S.Content className="medium20">{customerData.orderName}</S.Content>
            <S.Label className="regular16">고객 정보</S.Label>
            <S.Content className="medium20">
              {getCustomerInfo(
                customerData.customer.name,
                customerData.customer.company,
              )}
            </S.Content>
            <S.Label className="regular16">고객 휴대폰 번호</S.Label>
            <S.Content className="medium20">
              {getPhoneNumber(customerData.customer.phone)}
            </S.Content>
            <S.Label className="regular16">발주서 정보</S.Label>
            <S.FileName
              className="medium16 flex-column"
              href={fileData.fileUrl}
              download={true}
              target="_blank"
            >
              {fileData.fileName}
            </S.FileName>
          </>
        )}
        <div className="flex-row">
          <S.Label className="regular16">인수자 이름</S.Label>
          <S.Required className="regular16">*</S.Required>
        </div>
        <S.Input
          className="medium18"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={onChangeName}
          maxLength={10}
          disabled={isSubmit}
        />
        <div className="flex-row">
          <S.Label className="regular16">인수자 휴대폰 번호</S.Label>
          <S.Required className="regular16">*</S.Required>
        </div>
        <S.Input
          className="medium18"
          placeholder="휴대폰 번호를 입력하세요 (숫자만)"
          type="tel"
          maxLength={11}
          value={phone}
          onChange={onChangePhone}
          disabled={isSubmit}
        />
        <div className="flex-row-between-center">
          <div className="flex-row">
            <S.Label className="regular16">인수자 서명</S.Label>
            <S.Required className="regular16">*</S.Required>
          </div>
          <S.RedoWrapper
            className="flex-row-align-center"
            onClick={onResetSignature}
          >
            <RedoIcon size={16} />
            <Spacer width="5px" height="100%" />
            <S.Label className="medium16">서명 초기화</S.Label>
          </S.RedoWrapper>
        </div>
        <SignitureCanvas
          ref={canvasRef}
          onBegin={() => setIsSign(true)}
          clearOnResize={false}
          canvasProps={{ className: "signatureCanvas" }}
        />
        <Spacer width="100%" height="180px" />
        <S.Button
          className="bold16"
          disabled={!isSubmitAvailable}
          onClick={onSubmit}
        >
          {isSubmit ? "서명 완료" : "서명하기"}
        </S.Button>
      </S.Wrapper>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { cookies } = context.req;
  const { orderId } = context.params as unknown as { orderId: string };

  setSsrAxiosHeader(cookies);
  await queryClient.prefetchQuery({
    queryKey: [`order/${orderId}/customer`],
    queryFn: () => OrderApi.GET_ORDER_CUSTOMER_INFO(String(orderId)),
  });
  await queryClient.prefetchQuery({
    queryKey: [`order/${orderId}/file`],
    queryFn: () => OrderApi.GET_PURCHASE_ORDER_FILE(String(orderId)),
  });

  const queryState = queryClient.getQueryState([`order/${orderId}/customer`]);
  const queryState2 = queryClient.getQueryState([`order/${orderId}/file`]);
  if (queryState?.status === "error" || queryState2?.status === "error") {
    return {
      redirect: {
        destination: `${AppPages.LOGIN}?redirect=${encodeURIComponent(
          context.resolvedUrl,
        )}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
