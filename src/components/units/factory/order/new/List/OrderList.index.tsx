import FactoryNewOrderItem from "./OrderItem.index";
import { IOrderListProps } from "./OrderList.types";

export default function FactoryNewOrderList(prop: IOrderListProps) {
  return (
    <>
      {prop.data.contents.map((el) => (
        <FactoryNewOrderItem
          data={el}
          onOpenModal={prop.onOpenModal}
          key={el.id}
        />
      ))}
    </>
  );
}
