import { OrderStatus } from "@/src/lib/apis/order/Order.types";
import {
  IDetailCustomer,
  IDetailDrawing,
  IDetailOrder,
  IDetailPurchaseOrder,
  IDetailQuotation,
} from "@/src/lib/apis/order/detail/OrderDetail.types";
import { UserType } from "@/src/lib/apis/user/User.types";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { RefObject } from "react";

interface IDetailSectionProps {
  role: UserType;
  status: OrderStatus | undefined;
  orderId: string;
}

export type FocusableSection = "OrderInfo" | "DrawingInfo" | "QuotationInfo";

export interface IOrderInfoSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
  data: IDetailOrder;
  status: OrderStatus | undefined;
}

export interface IUrgentSectionProps {
  isUrgent: boolean;
  orderId: string;
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

export interface IDrawingInfoItemProps {
  role: UserType;
  status: OrderStatus | undefined;
  data: IDetailDrawing;
  onEditDrawing: () => void;
  onDeleteDrawing: () => void;
}

export interface IQuotationInfoSectionProps extends IDetailSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
  data: IDetailQuotation | null;
  scrollPage: () => void;
}

export interface IPurchaseOrderInfoSectionProps extends IDetailSectionProps {
  data: IDetailPurchaseOrder | null;
  name: string;
  minDate: string | null;
  scrollPage: () => void;
}
