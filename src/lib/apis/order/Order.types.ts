export interface ICustomerOrderResponse {
  contents: ICustomerOrder[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

export interface ICustomerOrder {
  id: number;
  name: string;
  imgUrl: string;
  stage: string;
  isUrgent: boolean;
  manufacturing: string[];
  createdAt: any;
  deliveryAt: any | null;
  cost: number | null;
  request: string | null;
}
