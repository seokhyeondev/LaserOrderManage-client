import { IOrderModalContent } from "@/src/components/commons/modal/order/OrderModal.types";
import {
  IFactoryNewOrder,
  IFactoryNewOrderResponse,
} from "@/src/lib/apis/order/Order.types";

export interface IOrderListProps {
  data: IFactoryNewOrderResponse;
  onOpenModal: (content: IOrderModalContent) => void;
}

export interface IOrderItemProps {
  data: IFactoryNewOrder;
  onOpenModal: (content: IOrderModalContent) => void;
}

export interface IQuotationLabelProps {
  isComplete: boolean;
}
