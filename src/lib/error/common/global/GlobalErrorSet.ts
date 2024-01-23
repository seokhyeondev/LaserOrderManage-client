import { DomainErrorSetType } from "../DomainErrorSetType";

const global400 = {
  "1": "잘못된 요청입니다.",
  "2": "파라미터의 타입이 올바르지 않습니다.",
  "3": "파라미터는 필수 입력값입니다.",
  "4": "파라미터가 올바르지 않습니다.",
  "5": "Request Body 필드가 올바르지 않습니다.",
  "6": "Request Body가 필요한 요청입니다.",
  "7": "쿠키값이 존재하지 않습니다.",
};

const global401 = {
  "1": "인증 자격 정보가 유효하지 않습니다.",
};

const global403 = {
  "1": "인증이 필요합니다.",
};

const global405 = {
  "1": "지원하지 않은 HTTP 메서드입니다.",
};

const global413 = {
  "1": "요청의 크기가 100MB를 초과합니다.",
  "2": "요청 파일의 크기가 100MB를 초과합니다.",
};

const global500 = {
  "1": "서버 에러입니다.",
  "2": "알 수 없는 오류가 발생했습니다.",
  "3": "메일 전송이 불가능합니다.",
  "4": "AWS S3에 파일 업로드가 불가합니다.",
  "5": "썸네일 추출이 불가능합니다.",
};

const GlobalErrorSet: DomainErrorSetType = {
  400: global400,
  401: global401,
  403: global403,
  404: null,
  405: global405,
  413: global413,
  500: global500,
};

export default GlobalErrorSet;
