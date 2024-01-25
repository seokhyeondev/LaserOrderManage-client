import { OrderStatus } from "@/src/lib/apis/order/Order.types";

export interface IOrderProgressbarProps {
  stage: OrderStatus;
}

export interface IProgressProps {
  isActive: boolean;
}

export interface IActiveBarProps {
  percentage: number;
}
