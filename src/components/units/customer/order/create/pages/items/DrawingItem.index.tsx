import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./DrawingItem.styles";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { IDrawing } from "@/src/lib/apis/order/create/OrderCreate.types";
import { getFileSize } from "@/src/lib/utils/utils";

interface IIngredient {
  key: string;
  name: string;
}

const INGREDIENTS: IIngredient[] = [
  { key: "강철", name: "강철" },
  { key: "연철", name: "연철" },
];

interface IDrawingItemProps {
  data: IDrawing;
  id: number;
  onChangeCount: (id: number, event: ChangeEvent<HTMLInputElement>) => void;
  onChangeIngredient: (id: number, event: ChangeEvent<HTMLSelectElement>) => void;
  onDelete: (id: number) => void;
}

export default function DrawingItem(props: IDrawingItemProps) {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <S.Wrapper className="flex-row-between">
      <S.InfoWrapper className="flex-row">
        <Image
          src={props.data.thumbnailImgUrl}
          width={120}
          height={120}
          style={S.Thumbnail}
          alt={props.data.thumbnailImgUrl}
        />
        <Spacer width="24px" height="100%" />
        <S.DetailWrapper className="flex-column-between">
          <div>
            <p className="bold18">{props.data.fileName}</p>
            <Spacer width="100%" height="4px" />
            <S.FileSize className="regular14">{getFileSize(props.data.fileSize)}</S.FileSize>
          </div>
          <div className="flex-row">
            <div>
              <div className="flex-row">
                <S.Label className="regular14">수량</S.Label>
                <S.Required className="regular14">*</S.Required>
              </div>
              <Spacer width="100%" height="8px" />
              <S.InputWrapper
                className="flex-row-between-center"
                isFocus={inputFocus}
              >
                <S.Input
                  placeholder="수량 입력"
                  value={props.data.count}
                  onChange={(event) => props.onChangeCount(props.id, event)}
                  maxLength={10}
                  onFocus={() => setInputFocus(true)}
                  onBlur={() => setInputFocus(false)}
                />
                {props.data.count !== "" && 
                  (<p className="regular14">개</p>)
                }
              </S.InputWrapper>
            </div>
            <Spacer width="48px" height="100%" />
            <div>
              <div className="flex-row">
                <S.Label className="regular14">재료</S.Label>
                <S.Required className="regular14">*</S.Required>
              </div>
              <Spacer width="100%" height="8px" />
              <S.SelectWrapper>
                <S.Select value={props.data.ingredient} onChange={(event) => props.onChangeIngredient(props.id, event)}>
                  <S.Option value={""} disabled hidden>
                    재료를 선택해주세요
                  </S.Option>
                  {INGREDIENTS.map((el) => (
                    <S.Option key={el.key} value={el.key}>
                      {el.name}
                    </S.Option>
                  ))}
                </S.Select>
              </S.SelectWrapper>
            </div>
          </div>
        </S.DetailWrapper>
      </S.InfoWrapper>
      <Image
        src="/images/trash.svg"
        width={20}
        height={20}
        alt=""
        style={S.DeleteIcon}
        onClick={() => props.onDelete(props.id)}
      /> 
    </S.Wrapper>
  );
}
