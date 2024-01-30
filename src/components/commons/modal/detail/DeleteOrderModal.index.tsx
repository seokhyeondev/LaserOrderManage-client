import Modal from "../Modal.index";
import { IDeleteOrderModalProps } from "./DetailModal.types";
import * as S from "./DetailModal.styles";
import Spacer from "../../spacer/Spacer.index";

export default function DeleteOrderModal({
  isOpen,
  orderName,
  orderId,
  onClose,
}: IDeleteOrderModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper width={600}>
        <S.Title className="bold20">거래 삭제하기</S.Title>
        <p className="medium20">
          삭제 시 거래 데이터가 삭제되며 이후 복구할 수 없습니다. 정말로
          삭제하시겠습니까?
        </p>
        <Spacer width="100%" height="40px" />
        <S.ButtonWrapper className="flex-row">
          <S.CancelButton className="bold14" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="8px" height="100%" />
          <S.SubmitButton className="bold14" onClick={() => {}}>
            삭제하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Modal>
  );
}
