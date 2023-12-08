export interface IDeliveryAddressListResponse {
  contents: IDeliveryAddress[];
  totalElements: number;
}

export interface IDeliveryAddressRequest {
  deliveryName: string;
  zipCode: string;
  address: string;
  detailAddress: string;
  receiver: string;
  phone1: string;
  phone2: string | null;
  isDefault: boolean;
}

export interface IDeliveryAddressResponse {}

export interface IDeliveryAddress {
  id: number;
  name: string;
  zipCode: string;
  address: string;
  detailAddress: string | null;
  receiver: string;
  phone1: string;
  phone2: string | null;
  isDefault: boolean;
}
