type IOrderList = {
  id: number;
  name: string;
  customer: string;
  company?: string;
  customerType?: string;
  quotation: string;
  imgUrl: string;
  isUrgent: boolean;
  manufacturing: string;
  createdAt: any;
  deliveryAt?: any;
  cost?: number;
  request?: string;
};

export interface IOrderListProps {
  data: IOrderList;
}

export interface IQuotationLabelProps {
  isComplete: boolean;
}
