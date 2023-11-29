import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./DrawingItem.styles";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { IDrawing } from "@/src/lib/apis/order/create/OrderCreate.types";
import { getFileSize } from "@/src/lib/utils/utils";
import LoadingBox from "@/src/components/commons/loading/LoadingBox.index";

interface IIngredient {
  key: string;
}

const INGREDIENTS: IIngredient[] = [
  { key: "2HL" },
  { key: "HL" },
  { key: "2PL" },
  { key: "PL" },
  { key: "430" },
  { key: "AC" },
  { key: "AL" },
  { key: "ALCK" },
  { key: "AR" },
  { key: "ATOS" },
  { key: "CK" },
  { key: "CR" },
  { key: "CU" },
  { key: "EGI" },
  { key: "GI" },
  { key: "HGI" },
  { key: "MS" },
  { key: "MS-N" },
  { key: "PO" },
  { key: "S45" },
  { key: "SM490" },
  { key: "SPCC" },
  { key: "SS" },
  { key: "SS400" },
  { key: "SS41" },
  { key: "STS" },
  { key: "SUS" },
  { key: "SUSCK" },
  { key: "TI" },
];

export interface IDrawingItem extends IDrawing {
  isLoading: boolean;
}

interface IDrawingItemProps {
  data: IDrawingItem;
  onChangeCount: (name: string, event: ChangeEvent<HTMLInputElement>) => void;
  onChangeIngredient: (
    name: string,
    event: ChangeEvent<HTMLSelectElement>,
  ) => void;
  onChangeThickness: (
    name: string,
    event: ChangeEvent<HTMLSelectElement>,
  ) => void;
  onDelete: (name: string) => void;
}

export default function DrawingItem(props: IDrawingItemProps) {
  const [countFocus, setCountFocus] = useState(false);
  return (
    <S.Wrapper className="flex-row-between">
      <S.InfoWrapper className="flex-row">
        {props.data.isLoading ? (
          <LoadingBox />
        ) : (
          <Image
            src={props.data.thumbnailUrl}
            width={120}
            height={120}
            style={S.Thumbnail}
            alt={props.data.thumbnailUrl}
          />
        )}
        <Spacer width="24px" height="100%" />
        <S.DetailWrapper className="flex-column-between">
          <div>
            <p className="bold18">{props.data.fileName}</p>
            <Spacer width="100%" height="4px" />
            <S.FileSize className="regular14">
              {getFileSize(props.data.fileSize)}
            </S.FileSize>
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
                isFocus={countFocus}
              >
                <S.Input
                  placeholder="수량 입력"
                  value={props.data.count}
                  onChange={(event) =>
                    props.onChangeCount(props.data.fileName, event)
                  }
                  maxLength={10}
                  onFocus={() => setCountFocus(true)}
                  onBlur={() => setCountFocus(false)}
                />
                {props.data.count !== "" && <p className="regular14">개</p>}
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
                <S.Select
                  value={props.data.ingredient}
                  onChange={(event) =>
                    props.onChangeIngredient(props.data.fileName, event)
                  }
                >
                  <S.Option value={""} disabled hidden>
                    재료를 선택해주세요
                  </S.Option>
                  {INGREDIENTS.map((el) => (
                    <S.Option key={el.key} value={el.key}>
                      {el.key}
                    </S.Option>
                  ))}
                </S.Select>
              </S.SelectWrapper>
            </div>
            <Spacer width="48px" height="100%" />
            <div>
              <div className="flex-row">
                <S.Label className="regular14">두께</S.Label>
                <S.Required className="regular14">*</S.Required>
              </div>
              <Spacer width="100%" height="8px" />
              <S.SelectWrapper>
                <S.Select
                  value={props.data.thickness}
                  onChange={(event) =>
                    props.onChangeThickness(props.data.fileName, event)
                  }
                >
                  <S.Option value={""} disabled hidden>
                    두께를 선택해주세요
                  </S.Option>
                  {Array.from({ length: 19 }, (_, i) => i + 1).map((el) => (
                    <S.Option key={el} value={el}>
                      {`${el} T`}
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
        onClick={() => props.onDelete(props.data.fileName)}
      />
    </S.Wrapper>
  );
}
