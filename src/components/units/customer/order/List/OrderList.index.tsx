import CustomerOrderItem from "./OrderItem.index";
import { IOrderListProps } from "./OrderList.types";

export default function CustomerOrderList(prop: IOrderListProps) {
  return (
    <>
      {prop.data.contents.map((el) => (
        <CustomerOrderItem
          data={el}
          onOpenModal={prop.onOpenModal}
          key={el.id}
        />
      ))}
    </>
  );
}
