import CustomerOrderItem from "./OrderItem.index";
import { IOrderListProps } from "./OrderList.types";

export default function CustomerOrderList({
  data,
  onOpenModal,
}: IOrderListProps) {
  return (
    <>
      {data.contents.map((el) => (
        <CustomerOrderItem key={el.id} data={el} onOpenModal={onOpenModal} />
      ))}
    </>
  );
}
