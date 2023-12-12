import { IDetailDrawing } from "@/src/lib/apis/order/detail/OrderDetail.types";
import { IModalProps } from "../Modal.index";

export interface IQuotationModalProps extends IModalProps {}

export interface IPurchaseOrderModalProps extends IModalProps {}

export interface IDeliveryModalProps extends IModalProps {}

export interface IEditDrawingModalProps extends IModalProps {
  data: IDetailDrawing;
}
