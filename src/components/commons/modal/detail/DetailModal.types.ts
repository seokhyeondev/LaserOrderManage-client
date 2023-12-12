import {
  IDetailDrawing,
  IDetailPurchaseOrder,
  IDetailQuotation,
} from "@/src/lib/apis/order/detail/OrderDetail.types";
import { IModalProps } from "../Modal.index";

export interface IQuotationModalProps extends IModalProps {
  data: IDetailQuotation | null;
}

export interface IPurchaseOrderModalProps extends IModalProps {
  data: IDetailPurchaseOrder | null;
}

export interface IDeliveryModalProps extends IModalProps {}

export interface IEditDrawingModalProps extends IModalProps {
  data: IDetailDrawing;
}

export interface IAddDrawingModalProps extends IModalProps {}
