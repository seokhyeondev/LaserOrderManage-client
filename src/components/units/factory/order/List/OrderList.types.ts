import { IOrderModalContent } from "@/src/components/commons/modal/order/OrderModal.types";
import {
  IFactoryOrder,
  IFactoryOrderResponse,
} from "@/src/lib/apis/order/Order.types";

export interface IOrderListProps {
  data: IFactoryOrderResponse;
  onOpenModal: (content: IOrderModalContent) => void;
}

export interface IOrderItemProps {
  data: IFactoryOrder;
  onOpenModal: (content: IOrderModalContent) => void;
}
