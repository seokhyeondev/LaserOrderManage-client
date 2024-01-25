import * as S from "./OrderModal.styles";
import { IOrderModalProps } from "./OrderModal.types";
import Modal from "../Modal.index";
import XIcon from "../../icons/XIcon.index";

export default function OrderModal({
  isOpen,
  content,
  onClose,
}: IOrderModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalWrapper>
        <S.ModalHeader className="flex-row-between">
          <p className="bold24">요청사항</p>
          <XIcon size={20} onClick={onClose} />
        </S.ModalHeader>
        <S.ModalProjectName className="medium18">
          {content.name}
        </S.ModalProjectName>
        <S.ModalContent>
          <p className="regular16">{content.request}</p>
        </S.ModalContent>
      </S.ModalWrapper>
    </Modal>
  );
}
