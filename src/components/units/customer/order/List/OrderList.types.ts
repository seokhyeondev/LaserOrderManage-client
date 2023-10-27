import { IOrderModalContent } from "@/src/components/commons/modal/order/OrderModal.types";
import {
  ICustomerOrderResponse,
  ICustomerOrder,
} from "@/src/lib/apis/order/Order.types";

export interface IOrderListProps {
  data: ICustomerOrderResponse;
  onOpenModal: (content: IOrderModalContent) => void;
}

export interface IOrderItemProps {
  data: ICustomerOrder;
  onOpenModal: (content: IOrderModalContent) => void;
}
