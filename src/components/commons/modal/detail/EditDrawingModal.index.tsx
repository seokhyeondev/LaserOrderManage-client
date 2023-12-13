import Modal from "../Modal.index";
import { IEditDrawingModalProps } from "./DetailModal.types";
import * as S from "./DetailModal.styles";
import Image from "next/image";
import Spacer from "../../spacer/Spacer.index";
import { useInputWithRegex } from "@/src/lib/hooks/useInput";
import { numberRegex } from "@/src/lib/constants/regex";
import { INGREDIENTS, MAX_THICKNESS } from "@/src/lib/constants/constant";
import { useOptions } from "@/src/lib/hooks/useSelect";
import { useToastify } from "@/src/lib/hooks/useToastify";

export default function EditDrawingModal({
  isOpen,
  data,
  callback,
  onClose,
}: IEditDrawingModalProps) {
  const [count, onChangeCount] = useInputWithRegex(
    numberRegex,
    "",
    String(data.count),
  );
  const [ingredient, onChangeIngredient] = useOptions(data.ingredient);
  const [thickness, onChangeThickness] = useOptions(String(data.thickness));
  const { setToast } = useToastify();

  const onSubmit = () => {
    callback({
      ...data,
      count: Number(count),
      ingredient: ingredient,
      thickness: Number(thickness),
    });
    setToast({ comment: "도면을 수정했어요" });
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper width={400}>
        <S.Title className="bold20">도면 수정하기</S.Title>
        <div className="flex-center">
          <Image
            width={120}
            height={120}
            src={data.thumbnailUrl}
            alt={data.thumbnailUrl}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <Spacer width="100%" height="20px" />
        <S.FileName className="bold16">{data.fileName}</S.FileName>
        <Spacer width="100%" height="30px" />
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular12">수량</S.Label>
          <S.Required className="regular12">*</S.Required>
        </S.LabelWrapper>
        <S.InputWrapper className="flex-row-align-center">
          <S.Input
            className="regular14"
            placeholder="수량을 입력해주세요"
            value={count}
            onChange={onChangeCount}
          />
          {count !== "" && <p className="regular12">개</p>}
        </S.InputWrapper>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular12">재료</S.Label>
          <S.Required className="regular12">*</S.Required>
        </S.LabelWrapper>
        <S.Select value={ingredient} onChange={onChangeIngredient}>
          {INGREDIENTS.map((el) => (
            <S.Option key={el.key} value={el.key}>
              {el.key}
            </S.Option>
          ))}
        </S.Select>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular12">두께</S.Label>
          <S.Required className="regular12">*</S.Required>
        </S.LabelWrapper>
        <S.Select value={thickness} onChange={onChangeThickness}>
          {Array.from({ length: MAX_THICKNESS }, (_, i) => i + 1).map((el) => (
            <S.Option key={el} value={el}>{`${el} T`}</S.Option>
          ))}
        </S.Select>
        <Spacer width="100%" height="68px" />
        <S.ButtonWrapper className="flex-row">
          <S.CancelButton className="bold14" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="8px" height="100%" />
          <S.SubmitButton
            className="bold14"
            disabled={count === ""}
            onClick={onSubmit}
          >
            수정하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Modal>
  );
}
