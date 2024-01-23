import {
  useInputWithMaxLength,
  useInputWithRegex,
} from "@/src/lib/hooks/useInput";
import Spacer from "../../spacer/Spacer.index";
import Modal, { IModalProps } from "../Modal.index";
import * as S from "./MypageModal.styles";
import { numberRegex, phoneRegex } from "@/src/lib/constants/regex";
import {
  IOrderMangerRequest,
  IOrderManager,
} from "@/src/lib/apis/user/factory/Factory.types";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { FactoryApi } from "@/src/lib/apis/user/factory/FactoryApi";
import { useToastify } from "@/src/lib/hooks/useToastify";

interface IMangerModalProps extends IModalProps {
  initData?: IOrderManager;
  refetch: () => void;
}

export default function ManagerModal({
  isOpen,
  initData,
  onClose,
  refetch,
}: IMangerModalProps) {
  const nameArgs = useInputWithMaxLength(10);
  const [phone, onChangePhone, setPhone] = useInputWithRegex(numberRegex, "");
  const submitAvailable = nameArgs.value.length > 1 && phoneRegex.test(phone);
  const { setToast } = useToastify();

  useEffect(() => {
    if (initData) {
      nameArgs.setValue(initData.name);
      setPhone(initData.phone);
    } else {
      nameArgs.setValue("");
      setPhone("");
    }
  }, [isOpen]);

  const { mutate: postMutate } = useMutation({
    mutationFn: FactoryApi.POST_ORDER_MANAGER,
    onSuccess: () => {
      setToast({ comment: "담당자를 추가했어요" });
      onClose();
      refetch();
    },
    onError: () => {
      setToast({ comment: "담당자를 추가에 실패했어요" });
    },
  });

  const { mutate: editMutate } = useMutation({
    mutationFn: FactoryApi.EDIT_ORDER_MANAGER,
    onSuccess: () => {
      setToast({ comment: "담당자를 수정했어요" });
      onClose();
      refetch();
    },
    onError: () => {
      setToast({ comment: "담당자를 수정에 실패했어요" });
    },
  });

  const onSubmit = () => {
    const payload: IOrderMangerRequest = {
      name: nameArgs.value.trim(),
      phone: phone.trim(),
    };
    if (initData) {
      editMutate({ id: initData.id, payload: payload });
    } else {
      postMutate(payload);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper>
        <S.Title className="bold18">담당자 등록</S.Title>
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.Label className="medium16">담당자명</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="담당자명을 입력하세요"
          value={nameArgs.value}
          onChange={nameArgs.onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
          }}
        />
        <Spacer width="100%" height="24px" />
        <div className="flex-row">
          <S.Label className="medium16">담당자 번호</S.Label>
          <S.Required className="medium16">*</S.Required>
        </div>
        <Spacer width="100%" height="10px" />
        <S.Input
          placeholder="휴대폰 번호 (숫자만)"
          value={phone}
          maxLength={11}
          onChange={onChangePhone}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
          }}
        />
        <Spacer width="100%" height="30px" />
        <div className="flex-row">
          <S.CancelButton className="bold16" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="10px" height="100%" />
          <S.SubmitButton
            className="bold16"
            disabled={!submitAvailable}
            onClick={onSubmit}
          >
            등록하기
          </S.SubmitButton>
        </div>
      </S.Wrapper>
    </Modal>
  );
}
