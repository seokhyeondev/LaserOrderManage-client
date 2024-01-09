import { useRef, useState } from "react";
import RedoIcon from "../../commons/icons/RedoIcon.index";
import Spacer from "../../commons/spacer/Spacer.index";
import * as S from "./Acquirer.styles";
import SignitureCanvas from "react-signature-canvas";
import { useInput, useInputWithRegex } from "@/src/lib/hooks/useInput";
import { numberRegex, phoneRegex } from "@/src/lib/constants/regex";
import { useRouter } from "next/router";
import { useToastify } from "@/src/lib/hooks/useToastify";

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
  const [isSubmit, setIsSubmit] = useState(false);
  const { setToast } = useToastify();
  const isSubmitAvailable =
    name !== "" &&
    name.length <= 10 &&
    phone !== "" &&
    phoneRegex.test(phone) &&
    isSigned &&
    !isSubmit;

  const onResetSignature = () => {
    if (!isSubmit) {
      canvasRef.current.clear();
      setIsSign(false);
    }
  };

  const createSignatureBlob = () => {
    const dataURL = canvasRef.current.toDataURL("image/png");
    const decodedURL = dataURL.replace(/^data:image\/\w+;base64,/, "");
    const buf = Buffer.from(decodedURL, "base64");
    return new Blob([buf], { type: "image/png" });
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

  const onSubmit = () => {
    const payload = new FormData();
    payload.append("file", createSignatureBlob());
    payload.append("acquire", createAcquirerBlob());
    setIsSubmit(true);
    canvasRef.current.off();
    setToast({ comment: "서명을 완료했어요" });
  };

  return (
    <S.Wrapper>
      <S.Title className="bold24">인수자 서명하기</S.Title>
      <Spacer width="100%" height="64px" />
      <S.Label className="regular16">거래명</S.Label>
      <S.Content className="medium20">기계 시스템 제작 프로젝트</S.Content>
      <S.Label className="regular16">고객 정보</S.Label>
      <S.Content className="medium20">김우리 · 우리 기술 (주)</S.Content>
      <S.Label className="regular16">고객 휴대폰 번호</S.Label>
      <S.Content className="medium20">010-1234-1234</S.Content>
      <S.Label className="regular16">발주서 정보</S.Label>
      <S.FileName className="medium16 flex-column">
        기계 시스템 제작 발주서.pdf
      </S.FileName>
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
  );
}
