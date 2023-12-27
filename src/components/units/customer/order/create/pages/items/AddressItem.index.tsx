import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./AddressItem.styles";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { getAddress, getPhoneNumber } from "@/src/lib/utils/utils";
import { IOrderDeliveryAddress } from "@/src/lib/apis/order/create/OrderCreate.types";

interface IAddressItemProps {
  data: IDeliveryAddress;
  isSelect: boolean;
  onSelect: () => void;
}

export default function AddressItem({
  data,
  isSelect,
  onSelect,
}: IAddressItemProps) {
  return (
    <S.AddressItem isSelect={isSelect} onClick={onSelect}>
      <div className="flex-row-align-center">
        <p className="bold16">{data.name}</p>
        <Spacer width="11px" height="100%" />
        <p className="medium16">
          {getAddress(data.address, data.detailAddress)}
        </p>
        {data.isDefault && (
          <>
            <Spacer width="11px" height="100%" />
            <S.BasicAddressLabel className="bold10 flex-center">
              기본 배송지
            </S.BasicAddressLabel>
          </>
        )}
      </div>
      <Spacer width="100%" height="8px" />
      <S.AddressUserInfo className="regular14">
        {`${data.receiver} · ${getPhoneNumber(data.phone1)}`}
      </S.AddressUserInfo>
    </S.AddressItem>
  );
}
