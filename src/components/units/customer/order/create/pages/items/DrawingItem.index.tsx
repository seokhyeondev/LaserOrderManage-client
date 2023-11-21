import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./DrawingItem.styles";
import Image from "next/image";
import { useState } from "react";

interface IIngredient {
  key: string;
  name: string;
}

const INGREDIENTS: IIngredient[] = [
  { key: "강철", name: "강철" },
  { key: "연철", name: "연철" },
];

export default function DrawingItem() {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <S.Wrapper className="flex-row-between">
      <S.InfoWrapper className="flex-row">
        <Image
          src="/images/netflix.webp"
          width={120}
          height={120}
          style={S.Thumbnail}
          alt=""
        />
        <Spacer width="24px" height="100%" />
        <S.DetailWrapper className="flex-column-between">
          <div>
            <p className="bold18">휠기능.dwg</p>
            <Spacer width="100%" height="4px" />
            <S.FileSize className="regular14">199.5kb</S.FileSize>
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
                  maxLength={10}
                  onFocus={() => setInputFocus(true)}
                  onBlur={() => setInputFocus(false)}
                />
                <p className="regular14">개</p>
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
                <S.Select>
                  <S.Option selected hidden>
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
      />
    </S.Wrapper>
  );
}
