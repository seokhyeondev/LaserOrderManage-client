import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./AddressItem.styles";

export default function AddressItem() {
  return (
    <S.AddressItem isSelect={false}>
      <div className="flex-row-align-center">
        <p className="bold16">회원 주소</p>
        <Spacer width="11px" height="100%" />
        <p className="medium16">(서울 마포구 성미산로 160, 휴먼빌)</p>
        <Spacer width="11px" height="100%" />
        <S.BasicAddressLabel className="regular10 flex-center">
          기본 배송지
        </S.BasicAddressLabel>
      </div>
      <Spacer width="100%" height="8px" />
      <S.AddressUserInfo className="regular14">
        안승우 · 010-0000-0000
      </S.AddressUserInfo>
    </S.AddressItem>
  );
}
