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

export interface IFactoryNewOrderResponse {
  orderList: IFactoryNewOrder[];
}

// export interface IFactoryReissueOrder {
//   id: number;
//   name: string;
//   customer: string;
//   company: string | null;
//   hasQuotation: boolean;
//   imgUrl: string;
//   isUrgent: boolean;
//   manufacturing: string[];
//   createdAt: any;
//   deliveryAt: any | null;
//   cost: number | null;
//   request: string | null;
// }

// export interface IFactoryNewIssueOrderResponse {
//   orderList: IFactoryNewOrder[];
// }

export interface IFactoryNewOrder {
  id: number;
  name: string;
  customer: string;
  company: string | null;
  isNewCustomer: boolean | null;
  hasQuotation: boolean;
  imgUrl: string;
  isUrgent: boolean;
  manufacturing: string[];
  createdAt: any;
  deliveryAt: any | null;
  cost: number | null;
  request: string | null;
}
