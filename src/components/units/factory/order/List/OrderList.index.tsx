import { IOrderListProps } from "./OrderList.types";
import FactoryOrderItem from "./OrderItem.index";

export default function FactoryOrderList(prop: IOrderListProps) {
  return (
    <>
      {prop.data.contents.map((el) => (
        <FactoryOrderItem
          key={el.id}
          data={el}
          onOpenModal={prop.onOpenModal}
        />
      ))}
    </>
  );
}
