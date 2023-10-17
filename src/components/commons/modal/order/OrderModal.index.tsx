import * as S from "./OrderModal.styles";
import Image from "next/image";
import { IOrderModalProps } from "./OrderModal.types";
import Modal from "../Modal.index";

export default function OrderModal(props: IOrderModalProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <S.ModalWrapper>
        <S.ModalHeader className="flex-row-between">
          <p className="bold28">요청사항</p>
          <S.ModalCloseIcon onClick={props.onClose}>
            <Image
              src="/images/multiply.svg"
              width={20}
              height={20}
              alt="닫기"
            />
          </S.ModalCloseIcon>
        </S.ModalHeader>
        <S.ModalProjectName className="medium20">
          {props.content.name}
        </S.ModalProjectName>
        <S.ModalContent>
          <p className="medium20">{props.content.request}</p>
        </S.ModalContent>
      </S.ModalWrapper>
    </Modal>
  );
}
