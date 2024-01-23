import CustomerErrorSet from "../customer/CustomerErrorSet";
import FactoryErrorSet from "../factory/FactoryErrorSet";
import OrderErrorSet from "../order/OrderErrorSet";
import UserErrorSet from "../user/UserErrorSet";
import { DomainErrorSetType } from "./DomainErrorSetType";
import GlobalErrorSet from "./global/GlobalErrorSet";

export type ErrorSetTypeKey =
  | "COMMON"
  | "USER"
  | "ORDER"
  | "CUSTOMER"
  | "FACTORY";

export type ErrorSetType = {
  [key in ErrorSetTypeKey]: DomainErrorSetType;
};

const ErrorSet: ErrorSetType = {
  COMMON: GlobalErrorSet,
  USER: UserErrorSet,
  ORDER: OrderErrorSet,
  CUSTOMER: CustomerErrorSet,
  FACTORY: FactoryErrorSet,
};

export default ErrorSet;
