import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import { ChangeEvent, useRef, useState, useEffect } from "react";
import DrawingItem, { IDrawingItem } from "./items/DrawingItem.index";
import { ICreateOrderPageProps } from "../CreateOrder.types";
import { useRecoilState } from "recoil";
import { createOrderState } from "@/src/store/createOrder";
import { IDrawing } from "@/src/lib/apis/order/create/OrderCreate.types";
import { AVAILABLE_FILE_TYPE } from "@/src/lib/constants/constant";
import { numberRegex } from "@/src/lib/constants/regex";
import { OrderCreateApi } from "@/src/lib/apis/order/create/OrderCreateApi";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToastify } from "@/src/lib/hooks/useToastify";
import UploadFileIcon from "@/src/components/commons/icons/UploadFileIcon.index";
import { useApiError } from "@/src/lib/hooks/useApiError";

export default function DrawingInfo(props: ICreateOrderPageProps) {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [orderState, setOrderState] = useRecoilState(createOrderState);
  const [drawings, setDrawings] = useState<IDrawingItem[]>([]);
  const nextStepAvailable =
    drawings.length !== 0 &&
    drawings.every(
      (drawing) =>
        drawing.count !== "" &&
        Number(drawing.count) > 0 &&
        drawing.ingredient !== "" &&
        drawing.thickness !== "" &&
        drawing.isLoading === false,
    );
  const { setToast } = useToastify();
  const { handleError } = useApiError();

  useEffect(() => {
    setDrawings(
      orderState.drawingList.map((el) => ({
        ...el,
        isLoading: false,
        count: el.count !== 0 ? String(el.count) : "",
        thickness: el.thickness !== 0 ? String(el.thickness) : "",
      })),
    );
  }, []);

  const onUpload = () => {
    hiddenFileInput?.current?.click();
  };

  const onChangeDrawingCount = (
    name: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const updatedDrawings = drawings.map((el) =>
      el.fileName === name
        ? { ...el, count: event.target.value.replace(numberRegex, "") }
        : el,
    );
    setDrawings(updatedDrawings);
  };

  const onChangeDrawingIngredient = (
    name: string,
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    const updatedDrawings = drawings.map((el) =>
      el.fileName === name ? { ...el, ingredient: event.target.value } : el,
    );
    setDrawings(updatedDrawings);
  };

  const onChangeThickness = (
    name: string,
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    const updatedDrawing = drawings.map((el) =>
      el.fileName === name ? { ...el, thickness: event.target.value } : el,
    );
    setDrawings(updatedDrawing);
  };

  const onDeleteDrawing = (name: string) => {
    const updatedDrawings = drawings.filter((el) => el.fileName !== name);
    setDrawings(updatedDrawings);
  };

  const { mutate } = useMutation({
    mutationFn: OrderCreateApi.UPLOAD_DRAWING,
    onSuccess: (data) => {
      const index = drawings.findIndex((el) => el.fileName === data.fileName);
      if (index === -1) return;
      const updatedDrawing = {
        ...drawings[index],
        isLoading: false,
        thumbnailUrl: data.thumbnailUrl,
        fileUrl: data.fileUrl,
      };
      const updatedDrawings = [
        ...drawings.slice(0, index),
        updatedDrawing,
        ...drawings.slice(index + 1),
      ];
      setDrawings(updatedDrawings);
    },
    onError: (error: AxiosError) => {},
  });

  const addDrawingClient = (file: File) => {
    const newDrawing: IDrawingItem = {
      thumbnailUrl: "",
      fileName: file.name,
      fileSize: file.size,
      fileType: file.name.slice(file.name.lastIndexOf(".") + 1),
      fileUrl: "",
      count: "",
      ingredient: "",
      thickness: "",
      isLoading: true,
    };
    setDrawings([...drawings, newDrawing]);
  };

  const postDrawingServer = (file: File) => {
    const payload = new FormData();
    payload.append("file", file);
    payload.append("fileName", file.name);
    payload.append("fileSize", String(file.size));
    mutate(payload, {
      onError: (error: AxiosError) => {
        onDeleteDrawing(file.name);
        handleError(error);
      },
    });
  };

  const onUploadCallback = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        setToast({ comment: "도면 최대 용량은 100MB까지 가능합니다" });
        return;
      }
      const containsDrawings = drawings.some((el) => el.fileName === file.name);
      if (containsDrawings) {
        setToast({ comment: "같은 이름의 파일은 추가할 수 없습니다" });
        return;
      }
      addDrawingClient(file);
      postDrawingServer(file);
    } else {
      setToast({ comment: "도면 파일을 찾을 수 없습니다" });
    }
  };

  const convertToIDrawing = (item: IDrawingItem): IDrawing => {
    const { isLoading, count, thickness, ...drawing } = item;
    return { ...drawing, count: Number(count), thickness: Number(thickness) };
  };

  const setCreateOrderState = () => {
    setOrderState({
      ...orderState,
      drawingList: drawings.map((el) => convertToIDrawing(el)),
    });
  };

  const onNext = () => {
    setCreateOrderState();
    if (props.onNext) props.onNext();
  };

  const onBefore = () => {
    if (!drawings.every((el) => el.isLoading === false)) return;
    setCreateOrderState();
    if (props.onBefore) props.onBefore();
  };

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
          {`${AVAILABLE_FILE_TYPE.join(", ")}, 최대용량 100MB`}
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
            <UploadFileIcon size={60} />
            <Spacer width="100%" height="16px" />
            <p className="medium16">도면을 추가해주세요</p>
          </div>
        </S.UploadArea>
        <Spacer width="100%" height="20px" />
        <div>
          {drawings.map((el) => (
            <DrawingItem
              key={el.fileName}
              data={el}
              onChangeCount={onChangeDrawingCount}
              onChangeIngredient={onChangeDrawingIngredient}
              onChangeThickness={onChangeThickness}
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
            disabled={!nextStepAvailable}
            onClick={onNext}
          >
            다음
          </S.NextButton>
        </div>
      </S.FormButtonWrapper>
    </S.FormWrapper>
  );
}
