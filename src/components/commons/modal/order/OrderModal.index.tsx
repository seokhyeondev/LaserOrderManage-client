import * as S from "./OrderModal.styles";
import Image from "next/image";
import { IOrderModalProps } from "./OrderModal.types";
import { useRef, MouseEvent, useEffect } from "react";

export default function OrderModal(props: IOrderModalProps) {
  const modalRef = useRef(null);

  const handleOutsideClick = (event: MouseEvent<HTMLElement>) => {
    if (modalRef.current === event.target) {
      props.onCloseModal();
    }
  };

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [props.isOpen]);

  if (!props.isOpen) {
    return null;
  }

  return (
    <S.ModalOverlay
      className="flex-center"
      onClick={handleOutsideClick}
      ref={modalRef}
    >
      <S.ModalWrapper>
        <S.ModalHeader className="flex-row-between">
          <p className="bold28">요청사항</p>
          <S.ModalCloseIcon onClick={props.onCloseModal}>
            <Image
              src="/images/multiply.svg"
              width={20}
              height={20}
              alt="닫기"
            />
          </S.ModalCloseIcon>
        </S.ModalHeader>
        <S.ModalProjectName className="medium20">
          {props.content[0]}
        </S.ModalProjectName>
        <S.ModalContent>
          <p className="medium20">{props.content[1]}</p>
        </S.ModalContent>
      </S.ModalWrapper>
    </S.ModalOverlay>
  );
}
