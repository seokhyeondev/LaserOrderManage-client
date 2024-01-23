import { DomainErrorSetType } from "../common/DomainErrorSetType";

const customer400 = {
  "1": "기본 배송지는 삭제할 수 없습니다.",
  "2": "기본 배송지 해제는 수행할 수 없습니다.",
};

const customer403 = {
  "1": "배송지에 대한 접근 권한이 없습니다.",
};

const customer404 = {
  "1": "존재하지 않는 배송지 입니다.",
};

const CustomerErrorSet: DomainErrorSetType = {
  400: customer400,
  401: null,
  403: customer403,
  404: customer404,
  405: null,
  413: null,
  500: null,
};

export default CustomerErrorSet;
