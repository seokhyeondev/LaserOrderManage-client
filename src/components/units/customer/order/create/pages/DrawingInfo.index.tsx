import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import Image from "next/image";
import { ChangeEvent, useRef } from "react";
import DrawingItem from "./items/DrawingItem.index";

export default function DrawingInfo() {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const onUpload = () => {
    hiddenFileInput?.current?.click();
  };

  const onUploadCallback = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
      const fileSize = file.size;

      console.log(
        `파일 이름: ${fileName} 확장자: ${fileExtension} 크기: ${fileSize}`,
      );
    }
  };
  return (
    <S.FormWrapper className="flex-column">
      <S.FormBodyWrapper>
        <S.FormTitle className="bold24">도면 업로드</S.FormTitle>
        <Spacer width="100%" height="50px" />
        <div className="flex-row">
          <S.FormLabel className="medium20">도면 업로드</S.FormLabel>
          <S.RequiredLabel className="medium20">*</S.RequiredLabel>
        </div>
        <S.UploadAnnounce className="regular16">
          (.dwg, .dxf, .pdf, .png, .jpg, .jpeg, 최대용량 100MB)
        </S.UploadAnnounce>
        <Spacer width="100%" height="25px" />
        <S.UploadInput
          type="file"
          accept=".dwg, .dxf, .pdf, .png, .jpg, .jpeg"
          ref={hiddenFileInput}
          onChange={onUploadCallback}
        />
        <S.UploadArea className="flex-center" onClick={onUpload}>
          <div className="flex-column-center">
            <Image src="/images/upload.svg" width={60} height={60} alt="" />
            <Spacer width="100%" height="16px" />
            <p className="medium16">도면을 추가해주세요</p>
          </div>
        </S.UploadArea>
        <Spacer width="100%" height="20px" />
        <DrawingItem />
      </S.FormBodyWrapper>
      <S.FormButtonWrapper className="flex-column-end">
        <div className="flex-row">
          <S.BackButton className="bold20">이전</S.BackButton>
          <S.NextButton className="bold20" enabled={true}>
            다음
          </S.NextButton>
        </div>
      </S.FormButtonWrapper>
    </S.FormWrapper>
  );
}
