import { DomainErrorSetType } from "../common/DomainErrorSetType";

const user400 = {
  "1": "JWT 정보가 요청에 포함되지 않았습니다.",
  "2": "이메일 또는 비밀번호가 올바르지 않습니다.",
};

const user401 = {
  "1": "JWT 정보가 유효하지 않습니다.",
  "2": "JWT 정보가 만료되었습니다.",
  "3": "지원되지 않는 JWT 입니다.",
  "4": "JWT 에 권한 정보가 존재하지 않습니다.",
  "5": "Access Token 정보가 유효하지 않습니다.",
  "6": "Refresh Token 정보가 유효하지 않습니다.",
  "7": "인증 코드 정보가 유효하지 않습니다.",
  "8": "Change Password Token 정보가 유효하지 않습니다.",
};

const user403 = {
  "1": "해당 요청에 대한 접근 권한이 없습니다.",
};

const user404 = {
  "1": "존재하지 않는 사용자 입니다.",
  "2": "이메일에 해당하는 인증 코드가 존재하지 않습니다.",
};

const UserErrorSet: DomainErrorSetType = {
  400: user400,
  401: user401,
  403: user403,
  404: user404,
  405: null,
  413: null,
  500: null,
};

export default UserErrorSet;
