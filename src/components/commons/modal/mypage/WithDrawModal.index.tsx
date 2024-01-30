import Spacer from "../../spacer/Spacer.index";
import Modal, { IModalProps } from "../Modal.index";
import * as S from "./MypageModal.styles";

export default function WithDrawModal({ isOpen, onClose }: IModalProps) {
  const onSubmit = () => {};

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper>
        <S.Title>회원 탈퇴하기</S.Title>
        <Spacer width="100%" height="30px" />
        <p className="regular16">
          탈퇴 시 모든 서비스 이용 기록이 삭제되며 이후 복구할 수 없습니다.
          정말로 탈퇴하시겠습니까?
        </p>
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.CancelButton className="bold16" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="10px" height="100%" />
          <S.SubmitButton className="bold16" onClick={onSubmit}>
            탈퇴하기
          </S.SubmitButton>
        </div>
      </S.Wrapper>
    </Modal>
  );
}
