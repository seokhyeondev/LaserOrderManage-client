import { Manufacturing, OrderStage } from "@/src/lib/apis/order/Order.types";

export const ORDER_STAGES: OrderStage[] = [
  "new",
  "quote-approval",
  "in-production",
  "production-completed",
  "completed",
];

export const MANUFACTURINGS: Manufacturing[] = [
  "laser-cutting",
  "bending",
  "welding",
];
