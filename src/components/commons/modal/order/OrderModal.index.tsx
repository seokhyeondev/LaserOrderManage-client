import * as S from "./OrderModal.styles";
import Image from "next/image";

export default function OrderModal() {
  return (
    <S.ModalOverlay className="flex-center">
      <S.ModalWrapper>
        <S.ModalHeader className="flex-row-between">
          <p className="bold28">요청사항</p>
          <S.ModalCloseIcon>
            <Image
              src="/images/multiply.svg"
              width={20}
              height={20}
              alt="닫기"
            />
          </S.ModalCloseIcon>
        </S.ModalHeader>
        <S.ModalProjectName className="medium20">
          실리콘 부품 제작 프로젝트
        </S.ModalProjectName>
        <S.ModalContent>
          <p className="medium20">실리콘 부품 배송시 안전을 신경써주세요.</p>
        </S.ModalContent>
      </S.ModalWrapper>
    </S.ModalOverlay>
  );
}
