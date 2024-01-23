import { DomainErrorSetType } from "../common/DomainErrorSetType";

const order400 = {
  "1": "지원하지 않는 파일 형식입니다.",
  "2": "지원하지 않는 재료입니다.",
  "3": "~단계의 거래는 해당 요청을 수행할 수 없습니다.",
  "4": "거래에는 최소 하나의 도면이 필요합니다. 마지막 도면은 삭제할 수 없습니다.",
  "5": "지원하지 않는 견적서 파일 형식입니다.",
  "6": "견적서 최초 작성 시, 견적서 파일은 필수 사항입니다.",
  "7": "지원하지 않는 발주서 파일 형식입니다.",
  "8": "발주서 최초 작성 시, 발주서 파일은 필수 사항입니다.",
};

const order403 = {
  "1": "거래에 대한 접근 권한이 없습니다.",
};

const order404 = {
  "1": "존재하지 않는 거래 입니다.",
  "2": "존재하지 않는 도면 입니다.",
  "3": "거래의 견적서가 존재하지 않습니다.",
  "4": "거래의 발주서가 존재하지 않습니다.",
  "5": "존재하지 않는 댓글 입니다.",
};

const OrderErrorSet: DomainErrorSetType = {
  400: order400,
  401: null,
  403: order403,
  404: order404,
  405: null,
  413: null,
  500: null,
};

export default OrderErrorSet;
