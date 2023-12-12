import {
  IDetailDrawing,
  IDetailPurchaseOrder,
  IDetailQuotation,
} from "@/src/lib/apis/order/detail/OrderDetail.types";
import { IModalProps } from "../Modal.index";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";

export interface IQuotationModalProps extends IModalProps {
  data: IDetailQuotation | null;
}

export interface IPurchaseOrderModalProps extends IModalProps {
  data: IDetailPurchaseOrder | null;
  callback: (newPurchaseOrder: IDetailPurchaseOrder) => void;
}

export interface IDeliveryModalProps extends IModalProps {
  data: IDeliveryAddress;
  callback: (newAddress: IDeliveryAddress) => void;
}

export interface IEditDrawingModalProps extends IModalProps {
  data: IDetailDrawing;
  callback: (newDrawing: IDetailDrawing) => void;
}

export interface IAddDrawingModalProps extends IModalProps {}
