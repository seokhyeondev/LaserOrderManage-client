import * as S from "./OrderModal.styles";
import Image from "next/image";
import { IOrderModalProps } from "./OrderModal.types";
import Modal from "../Modal.index";
import XIcon from "../../icons/XIcon.index";

export default function OrderModal(props: IOrderModalProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <S.ModalWrapper>
        <S.ModalHeader className="flex-row-between">
          <p className="bold24">요청사항</p>
          <XIcon size={20} onClick={props.onClose} />
        </S.ModalHeader>
        <S.ModalProjectName className="medium18">
          {props.content.name}
        </S.ModalProjectName>
        <S.ModalContent>
          <p className="regular16">{props.content.request}</p>
        </S.ModalContent>
      </S.ModalWrapper>
    </Modal>
  );
}
