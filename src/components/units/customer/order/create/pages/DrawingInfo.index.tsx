import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import Image from "next/image";
import { ChangeEvent, useRef, useState, useEffect } from "react";
import DrawingItem from "./items/DrawingItem.index";
import { ICreateOrderPageProps } from "../CreateOrder.types";
import { useRecoilState } from "recoil";
import { createOrderState } from "@/src/store/createOrder"
import { IDrawing, IDrawingRequest } from "@/src/lib/apis/order/create/OrderCreate.types";
import { AVAILABLE_FILE_TYPE } from "@/src/lib/constants/constant"
import { numberRegex } from "@/src/lib/constants/regex";

export default function DrawingInfo(props: ICreateOrderPageProps) {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [orderState, setOrderState] = useRecoilState(createOrderState);
  const [drawings, setDrawings] = useState<IDrawing[]>([]);
  const fileReader = new FileReader();
  const nextStepAvailable = drawings.length !== 0 && drawings.every(drawing => drawing.count !== "" && Number(drawing.count) > 0 && drawing.ingredient !== "");

  useEffect(() => {
    setDrawings(orderState.drawingList);
  }, []);

  const onUpload = () => {
    hiddenFileInput?.current?.click();
  };

  const onChangeDrawingCount = (id: number, event: ChangeEvent<HTMLInputElement>) => {
    const updatedDrawings = drawings.map((el, index) => index === id ? {...el, count: event.target.value.replace(numberRegex, "")} : el);
    setDrawings(updatedDrawings);
  };

  const onChangeDrawingIngredient = (id: number, event: ChangeEvent<HTMLSelectElement>) => {
    const updatedDrawings = drawings.map((el, index) => index === id ? {...el, ingredient: event.target.value} : el);
    setDrawings(updatedDrawings);
  };

  const onDeleteDrawing = (id: number) => {
    const updatedDrawings = drawings.filter((_, index) => index !== id);
    setDrawings(updatedDrawings);
  };

  const addDrawingClient = (file: File) => {
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      console.log(fileReader.result);
      const newDrawing: IDrawing = {
        thumbnailImgUrl: typeof(fileReader.result) === "string" ? fileReader.result : "",
        fileName: file.name,
        fileSize: file.size,
        fileType: file.name.slice(file.name.lastIndexOf(".") + 1),
        fileUrl: "",
        count: "",
        ingredient: ""
      }
      setDrawings([...drawings, newDrawing]);
    }
  }

  const postDrawingServer = (file: File) => {
    const formData = new FormData();
      formData.append("file", file);
      const payload: IDrawingRequest = {
        file: formData,
        fileName: file.name,
        fileSize: String(file.size)
      };
  }

  const onUploadCallback = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if(file.size > 100 * 1024 * 1024) {
        alert("도면 최대 용량은 100MB까지 가능합니다");
        return;
      }
      postDrawingServer(file);
      addDrawingClient(file);
    } else {
      alert("도면 파일을 찾을 수 없습니다");
    }
  };

  const setCreateOrderState = () => {
    setOrderState({
      ...orderState,
      drawingList: drawings
    });
  }

  const onNext = () => {
    setCreateOrderState();
    if(props.onNext) props.onNext();
  }

  const onBefore = () => {
    setCreateOrderState();
    if(props.onBefore) props.onBefore();
  }

  return (
    <S.FormWrapper className="flex-column">
      <S.FormBodyWrapper>
        <S.FormTitle className="bold24">도면 업로드</S.FormTitle>
        <Spacer width="100%" height="50px" />
        <div className="flex-row">
          <S.FormLabel className="medium20">도면 업로드</S.FormLabel>
          <S.RequiredLabel className="medium20">*</S.RequiredLabel>
        </div>
        <S.UploadAnnounce className="regular16">
          (.dwg, .dxf, .pdf, .png, .jpg, .jpeg, 최대용량 100MB)
        </S.UploadAnnounce>
        <Spacer width="100%" height="25px" />
        <S.UploadInput
          type="file"
          accept={AVAILABLE_FILE_TYPE.join(",")}
          ref={hiddenFileInput}
          onChange={onUploadCallback}
        />
        <S.UploadArea className="flex-center" onClick={onUpload}>
          <div className="flex-column-center">
            <Image src="/images/upload.svg" width={60} height={60} alt="" />
            <Spacer width="100%" height="16px" />
            <p className="medium16">도면을 추가해주세요</p>
          </div>
        </S.UploadArea>
        <Spacer width="100%" height="20px" />
        <div>
          {drawings.map((el, index) => (
            <DrawingItem
              key={index} 
              data={el} 
              id={index} 
              onChangeCount={onChangeDrawingCount} 
              onChangeIngredient={onChangeDrawingIngredient} 
              onDelete={onDeleteDrawing}
            />
          ))}
        </div>
      </S.FormBodyWrapper>
      <S.FormButtonWrapper className="flex-column-end">
        <div className="flex-row">
          <S.BackButton className="bold20" onClick={onBefore}>
            이전
          </S.BackButton>
          <S.NextButton
            className="bold20"
            enabled={nextStepAvailable}
            onClick={onNext}
            disabled={!nextStepAvailable}
          >
            다음
          </S.NextButton>
        </div>
      </S.FormButtonWrapper>
    </S.FormWrapper>
  );
}
