import { IOrderModalContent } from "@/src/components/commons/modal/order/OrderModal.types";

type IOrderList = {
  id: number;
  name: string;
  imgUrl: string;
  stage: string;
  manufacturing: string;
  createdAt: any;
  deliveryAt?: any;
  cost?: number;
  request?: string;
};

export interface IOrderListProps {
  data: IOrderList;
  onOpenModal: (content: IOrderModalContent) => void;
}
