import Spacer from "../../spacer/Spacer.index";
import Modal from "../Modal.index";
import { IPurchaseOrderModalProps } from "./DetailModal.types";
import * as S from "./DetailModal.styles";
import CalendarIcon from "../../icons/CalendarIcon.index";
import { useCalendar } from "@/src/lib/hooks/useDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useInput } from "@/src/lib/hooks/useInput";
import { getParamDate } from "@/src/lib/utils/utils";
import { useToastify } from "@/src/lib/hooks/useToastify";
import { useMutation } from "@tanstack/react-query";
import { OrderDetailApi } from "@/src/lib/apis/order/detail/OrderDetailApi";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import UploadIcon from "../../icons/UploadIcon.index";

type PurchaseOrder = {
  inspectionPeriod: any;
  inspectionCondition: string;
  paymentDate: any;
};

export default function PurchaseOrderModal({
  isOpen,
  data,
  orderId,
  minDate,
  callback,
  onClose,
}: IPurchaseOrderModalProps) {
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState("");
  const paymentDateArgs = useCalendar();
  const inspectionDateArgs = useCalendar();
  const [condition, onChangeCondition, setCondition] = useInput();
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const { setToast } = useToastify();

  useEffect(() => {
    if (isOpen) {
      if (data) {
        setFile(undefined);
        setFileName(data.fileName);
        paymentDateArgs.setDateValue(new Date(data.paymentDate));
        inspectionDateArgs.setDateValue(new Date(data.inspectionPeriod));
        setCondition(data.inspectionCondition);
      }
    }
  }, [isOpen]);

  const onUpload = () => {
    hiddenFileInput?.current?.click();
  };

  const onUploadCallback = (event: ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0];
    if (newFile) {
      setFile(newFile);
      setFileName(newFile.name);
    }
  };

  const { mutate } = useMutation({
    mutationFn: OrderDetailApi.PUT_ORDER_PURCHASE_ORDER,
    onError: () => {
      setToast({ comment: "발주서 등록에 실패했어요" });
    },
  });

  const onSubmit = () => {
    const payload = new FormData();
    if (file) payload.append("file", file);
    const purchaseOrder: PurchaseOrder = {
      inspectionPeriod: getParamDate(inspectionDateArgs.date),
      inspectionCondition: condition,
      paymentDate: getParamDate(paymentDateArgs.date),
    };
    const blob = new Blob([JSON.stringify(purchaseOrder)], {
      type: "application/json",
    });
    payload.append("purchaseOrder", blob);
    mutate(
      { id: orderId, payload: payload },
      {
        onSuccess: (res) => {
          callback({
            id: res.id,
            fileName: res.fileName,
            fileUrl: res.fileUrl,
            inspectionPeriod: purchaseOrder.inspectionPeriod,
            inspectionCondition: purchaseOrder.inspectionCondition,
            paymentDate: purchaseOrder.paymentDate,
            createdAt: new Date(),
          });
          setToast({
            comment: data ? "발주서를 수정했어요" : "발주서를 추가했어요",
          });
          onClose();
        },
      },
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper width={600}>
        <S.Title className="bold20">발주서 작성하기</S.Title>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular14">발주서 업로드</S.Label>
          <S.Required className="regular14">*</S.Required>
        </S.LabelWrapper>
        <S.UploadInput
          type="file"
          ref={hiddenFileInput}
          onChange={onUploadCallback}
        />
        <S.InputWrapper
          className="flex-row-align-center"
          focusable={true}
          onClick={onUpload}
        >
          <S.Input
            className="regular14"
            placeholder="발주서를 업로드해주세요"
            underline={fileName !== ""}
            value={fileName}
            readOnly
          />
          <UploadIcon size={16} />
        </S.InputWrapper>
        <S.RowWrapper className="flex-row">
          <S.CalendarBoxWrapper>
            <S.LabelWrapper className="flex-row">
              <S.Label className="regular14">지급일 선택</S.Label>
              <S.Required className="regular14">*</S.Required>
            </S.LabelWrapper>
            <S.CalendarInputWrapper>
              <S.InputWrapper
                className="flex-row-align-center"
                focusable={true}
                onClick={paymentDateArgs.toggle}
              >
                <S.Input
                  className="regular14"
                  placeholder="지급일을 선택해주세요"
                  value={paymentDateArgs.date}
                  readOnly
                />
                <CalendarIcon size={16} />
              </S.InputWrapper>
              <S.CalendarWrapper isOpen={paymentDateArgs.show}>
                <Calendar
                  locale="ko"
                  minDate={minDate ? new Date(minDate) : undefined}
                  onChange={paymentDateArgs.onDate}
                />
              </S.CalendarWrapper>
            </S.CalendarInputWrapper>
          </S.CalendarBoxWrapper>
          <S.CalendarBoxWrapper>
            <S.LabelWrapper className="flex-row">
              <S.Label className="regular14">검수 기간 선택</S.Label>
              <S.Required className="regular14">*</S.Required>
            </S.LabelWrapper>
            <S.CalendarInputWrapper>
              <S.InputWrapper
                className="flex-row-align-center"
                focusable={true}
                onClick={inspectionDateArgs.toggle}
              >
                <S.Input
                  className="regular14"
                  placeholder="검수 기간을 선택해주세요"
                  value={inspectionDateArgs.date}
                  readOnly
                />
                <CalendarIcon size={16} />
              </S.InputWrapper>
              <S.CalendarWrapper isOpen={inspectionDateArgs.show}>
                <Calendar
                  locale="ko"
                  minDate={minDate ? new Date(minDate) : undefined}
                  onChange={inspectionDateArgs.onDate}
                />
              </S.CalendarWrapper>
            </S.CalendarInputWrapper>
          </S.CalendarBoxWrapper>
        </S.RowWrapper>
        <S.LabelWrapper className="flex-row">
          <S.Label className="regular14">검수 조건</S.Label>
          <S.Required className="regular14">*</S.Required>
        </S.LabelWrapper>
        <S.TextArea
          className="regular14"
          placeholder="검수 조건을 입력해주세요"
          value={condition}
          onChange={onChangeCondition}
        />
        <Spacer width="100%" height="68px" />
        <S.ButtonWrapper className="flex-row">
          <S.CancelButton className="bold14" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="8px" height="100%" />
          <S.SubmitButton
            className="bold14"
            disabled={
              fileName === "" ||
              paymentDateArgs.date === "" ||
              inspectionDateArgs.date === "" ||
              condition === ""
            }
            onClick={onSubmit}
          >
            작성하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Modal>
  );
}
