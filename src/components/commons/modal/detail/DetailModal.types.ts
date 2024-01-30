import {
  IDetailDrawing,
  IDetailPurchaseOrder,
  IDetailQuotation,
} from "@/src/lib/apis/order/detail/OrderDetail.types";
import { IModalProps } from "../Modal.index";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";

export interface IQuotationModalProps extends IModalProps {
  data: IDetailQuotation | null;
  orderId: string;
  callback: (newQuotation: IDetailQuotation) => void;
}

export interface IPurchaseOrderModalProps extends IModalProps {
  data: IDetailPurchaseOrder | null;
  orderId: string;
  minDate: string | null;
  callback: (newPurchaseOrder: IDetailPurchaseOrder) => void;
}

export interface IDeliveryModalProps extends IModalProps {
  data: IDeliveryAddress;
  orderId: string;
  callback: (newAddress: IDeliveryAddress) => void;
}

export interface IEditDrawingModalProps extends IModalProps {
  data: IDetailDrawing;
  orderId: string;
  callback: (newDrawing: IDetailDrawing) => void;
}

export interface IAddDrawingModalProps extends IModalProps {
  orderId: string;
  callback: (newDrawing: IDetailDrawing) => void;
}

export interface IDeleteOrderModalProps extends IModalProps {
  orderName: string;
  orderId: string;
}
