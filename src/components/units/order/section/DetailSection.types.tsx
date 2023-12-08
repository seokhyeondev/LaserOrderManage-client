import { UserType } from "@/src/store/auth";
import { OrderStatus } from "@/src/lib/apis/order/Order.types";
import {
  IDetailCustomer,
  IDetailDrawing,
  IDetailOrder,
  IDetailPurchaseOrder,
  IDetailQuotation,
} from "@/src/lib/apis/order/detail/OrderDetail.types";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { RefObject } from "react";

interface IDetailSectionProps {
  role: UserType;
  status: OrderStatus;
}

export interface IOrderInfoSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
  data: IDetailOrder;
  status: OrderStatus;
}

export interface IUrgentSectionProps {
  isUrgent: boolean;
}

export interface ICustomerInfoSectionProps {
  data: IDetailCustomer;
}

export interface IDeliveryInfoSectionProps extends IDetailSectionProps {
  data: IDeliveryAddress;
}

export interface IDrawingInfoSectionProps extends IDetailSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
  data: IDetailDrawing[];
}

export interface IDrawingInfoItemProps extends IDetailSectionProps {
  data: IDetailDrawing;
  onEditDrawing: () => void;
  onDeleteDrawing: () => void;
}

export interface IQuotationInfoSectionProps extends IDetailSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
  data: IDetailQuotation | null;
}

export interface IPurchaseOrderInfoSectionProps extends IDetailSectionProps {
  data: IDetailPurchaseOrder | null;
}
