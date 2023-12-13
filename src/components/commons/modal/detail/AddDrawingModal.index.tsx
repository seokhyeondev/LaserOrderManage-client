import Modal from "../Modal.index";
import { IAddDrawingModalProps } from "./DetailModal.types";
import * as S from "./DetailModal.styles";
import { AVAILABLE_FILE_TYPE } from "@/src/lib/constants/constant";
import Spacer from "../../spacer/Spacer.index";
import { useRef, ChangeEvent, useState } from "react";
import Image from "next/image";
import DrawingItem, {
  IDrawingItem,
} from "@/src/components/units/customer/order/create/pages/items/DrawingItem.index";
import { numberRegex } from "@/src/lib/constants/regex";
import { useToastify } from "@/src/lib/hooks/useToastify";
import { IDetailAddDrawingRequest } from "@/src/lib/apis/order/detail/OrderDetail.types";
import { useMutation } from "@tanstack/react-query";
import { OrderCreateApi } from "@/src/lib/apis/order/create/OrderCreateApi";
import { AxiosError } from "axios";
import { IHttpStatus } from "@/src/lib/apis/axios";
import { OrderDetailApi } from "@/src/lib/apis/order/detail/OrderDetailApi";

export default function AddDrawingModal({
  isOpen,
  orderId,
  callback,
  onClose,
}: IAddDrawingModalProps) {
  const [drawing, setDrawing] = useState<IDrawingItem>();
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const { setToast } = useToastify();

  const onUpload = () => {
    hiddenFileInput?.current?.click();
  };

  const onChangeCount = (
    name: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    if (drawing) {
      const updatedDrawings: IDrawingItem = {
        ...drawing,
        count: event.target.value.replace(numberRegex, ""),
      };
      setDrawing(updatedDrawings);
    }
  };

  const onChangeIngredient = (
    name: string,
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    if (drawing) {
      const updatedDrawing: IDrawingItem = {
        ...drawing,
        ingredient: event.target.value,
      };
      setDrawing(updatedDrawing);
    }
  };

  const onChnageThickness = (
    name: string,
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    if (drawing) {
      const updatedDrawing: IDrawingItem = {
        ...drawing,
        thickness: event.target.value,
      };
      setDrawing(updatedDrawing);
    }
  };

  const onDeleteDrawing = (name: string) => {
    setDrawing(undefined);
  };

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
    setDrawing(newDrawing);
  };

  const { mutate: uploadMutate } = useMutation({
    mutationFn: OrderCreateApi.UPLOAD_DRAWING,
    onSuccess: (data) => {
      if (drawing) {
        const updatedDrawing: IDrawingItem = {
          ...drawing,
          isLoading: false,
          thumbnailUrl: data.thumbnailUrl,
          fileUrl: data.fileUrl,
        };
        setDrawing(updatedDrawing);
      }
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        onDeleteDrawing("");
        const status = error.response.data as IHttpStatus;
        if (status.errorCode === "-009") {
          // 지원하지 않는 파일 형식
          setToast({ comment: "지원하지 않는 파일 형식입니다" });
          return;
        }
        if (status.errorCode === "-503") {
          // 파일 업로드가 불가능
          setToast({ comment: "업로드를 할 수 없어요" });
          return;
        }
        //썸네일 추출이 불가능
        setToast({ comment: "업로드에 실패했어요" });
      }
    },
  });

  const postDrawingServer = (file: File) => {
    const payload = new FormData();
    payload.append("file", file);
    payload.append("fileName", file.name);
    payload.append("fileSize", String(file.size));
    uploadMutate(payload);
  };

  const onUploadCallback = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        setToast({ comment: "도면 최대 용량은 100MB까지 가능합니다" });
        return;
      }
      addDrawingClient(file);
      postDrawingServer(file);
    } else {
      setToast({ comment: "도면 파일을 찾을 수 없습니다" });
    }
  };

  const { mutate: addMutate } = useMutation({
    mutationFn: OrderDetailApi.POST_ORDER_DRAWING,
    onError: () => {
      setToast({ comment: "도면 추가를 실패했어요" });
    },
  });

  const onSubmit = () => {
    if (drawing) {
      const payload: IDetailAddDrawingRequest = {
        ...drawing,
        fileSize: String(drawing.fileSize),
        count: Number(drawing.count),
        thickness: Number(drawing.thickness),
      };
      // addMutate(
      //   { id: orderId, payload: payload },
      //   {
      //     onSuccess: (data) => {
      //       setToast({ comment: "도면을 추가했어요" });
      //       callback({ ...payload, id: data.id });
      //       onClose();
      //     },
      //   },
      // );
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper width={1200}>
        <p className="bold20">도면 추가하기</p>
        <Spacer width="100%" height="30px" />
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular16">도면 업로드</S.Label>
          <S.Required className="regular16">*</S.Required>
        </S.LabelWrapper>
        <S.UploadAnnounce className="regular16">
          {`${AVAILABLE_FILE_TYPE.join(", ")}, 최대용량 100MB`}
        </S.UploadAnnounce>
        <Spacer width="100%" height="24px" />
        <S.UploadInput
          type="file"
          accept={AVAILABLE_FILE_TYPE.join(",")}
          ref={hiddenFileInput}
          onChange={onUploadCallback}
        />
        {drawing === undefined && (
          <S.UploadArea className="flex-center" onClick={onUpload}>
            <div className="flex-column-center">
              <Image src="/images/upload.svg" width={60} height={60} alt="" />
              <Spacer width="100%" height="16px" />
              <p className="medium16">도면을 추가해주세요</p>
            </div>
          </S.UploadArea>
        )}
        {drawing && (
          <S.UploadDrawingsWrapper>
            <DrawingItem
              data={drawing}
              onChangeCount={onChangeCount}
              onChangeIngredient={onChangeIngredient}
              onChangeThickness={onChnageThickness}
              onDelete={onDeleteDrawing}
            />
          </S.UploadDrawingsWrapper>
        )}
        <Spacer width="100%" height="20px" />
        <S.ButtonWrapper className="flex-row">
          <S.CancelButton className="bold14" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="8px" height="100%" />
          <S.SubmitButton
            className="bold14"
            disabled={
              drawing === undefined ||
              drawing.count === "" ||
              Number(drawing.count) <= 0 ||
              drawing.ingredient === "" ||
              drawing.thickness === "" ||
              drawing.isLoading === true
            }
            onClick={onSubmit}
          >
            추가하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Modal>
  );
}
