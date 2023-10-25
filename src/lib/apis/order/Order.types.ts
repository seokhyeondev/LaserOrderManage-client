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

export interface IFactoryReissueOrderResponse {
  orderList: IFactoryReissueOrder[];
}

export interface IFactoryReissueOrder {
  id: number;
  name: string;
  customer: string;
  company: string | null;
  hasQuotation: boolean;
  imgUrl: string;
  isUrgent: boolean;
  manufacturing: string[];
  createdAt: any;
  deliveryAt: any | null;
  cost: number | null;
  request: string | null;
}

export interface IFactoryNewIssueOrderResponse {
  orderList: IFactoryNewIssueOrder[];
}

export interface IFactoryNewIssueOrder {
  id: number;
  name: string;
  customer: string;
  company: string | null;
  isNewCustomer: boolean;
  hasQuotation: boolean;
  imgUrl: string;
  isUrgent: boolean;
  manufacturing: string[];
  createdAt: any;
  deliveryAt: any | null;
  cost: number | null;
  request: string | null;
}
