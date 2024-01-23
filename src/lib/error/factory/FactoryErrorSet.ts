import { DomainErrorSetType } from "../common/DomainErrorSetType";

const factory403 = {
  "1": "거래 담당자에 대한 접근 권한이 없습니다.",
};

const factory404 = {
  "1": "존재하지 않는 거래 담당자 입니다.",
};

const FactoryErrorSet: DomainErrorSetType = {
  400: null,
  401: null,
  403: factory403,
  404: factory404,
  405: null,
  413: null,
  500: null,
};

export default FactoryErrorSet;
