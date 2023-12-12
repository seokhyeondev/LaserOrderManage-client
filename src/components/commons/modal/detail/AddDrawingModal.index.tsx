import Modal from "../Modal.index";
import { IAddDrawingModalProps } from "./DetailModal.types";
import * as S from "./DetailModal.styles";
import { AVAILABLE_FILE_TYPE } from "@/src/lib/constants/constant";
import Spacer from "../../spacer/Spacer.index";
import { useRef, ChangeEvent } from "react";
import Image from "next/image";

export default function AddDrawingModal({
  isOpen,
  onClose,
}: IAddDrawingModalProps) {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const onUpload = () => {
    hiddenFileInput?.current?.click();
  };
  const onUploadCallback = (event: ChangeEvent<HTMLInputElement>) => {};
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper width={970}>
        <p className="bold20">도면 추가하기</p>
        <Spacer width="100%" height="30px" />
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular16">도면 업로드</S.Label>
          <S.Required className="regular16">*</S.Required>
        </S.LabelWrapper>
        <S.UploadAnnounce className="regular16">
          {`${AVAILABLE_FILE_TYPE.join(", ")}, 최대용량 100MB`}
        </S.UploadAnnounce>
        <Spacer width="100%" height="24px" />
        <S.UploadInput
          type="file"
          accept={AVAILABLE_FILE_TYPE.join(",")}
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
        <S.UploadDrawingsWrapper></S.UploadDrawingsWrapper>
        <Spacer width="100%" height="10px" />
        <S.ButtonWrapper className="flex-row">
          <S.CancelButton className="bold14" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="8px" height="100%" />
          <S.SubmitButton className="bold14">수정하기</S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Modal>
  );
}
