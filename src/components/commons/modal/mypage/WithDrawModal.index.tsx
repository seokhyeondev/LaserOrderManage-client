import { useMutation } from "@tanstack/react-query";
import Spacer from "../../spacer/Spacer.index";
import Modal, { IModalProps } from "../Modal.index";
import * as S from "./MypageModal.styles";
import { UserApi } from "@/src/lib/apis/user/UserApi";
import { useToastify } from "@/src/lib/hooks/useToastify";
import { useResetRecoilState } from "recoil";
import { authState } from "@/src/store/auth";
import { resetCredentials } from "@/src/lib/utils/setCredentials";
import { useRouter } from "next/router";
import { AppPages } from "@/src/lib/constants/appPages";

export default function WithDrawModal({ isOpen, onClose }: IModalProps) {
  const resetAuthState = useResetRecoilState(authState);
  const router = useRouter();
  const { setToast } = useToastify();

  const { mutate } = useMutation({
    mutationFn: UserApi.WITHDRAWAL,
    onSuccess: () => {
      resetCredentials();
      resetAuthState();
      setToast({ comment: "회원 탈퇴되었습니다" });
      router.replace(AppPages.HOME);
    },
    onError: () => {
      setToast({ comment: "회원 탈퇴에 실패했어요" });
    },
  });

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
          <S.SubmitButton className="bold16" onClick={() => mutate()}>
            탈퇴하기
          </S.SubmitButton>
        </div>
      </S.Wrapper>
    </Modal>
  );
}
