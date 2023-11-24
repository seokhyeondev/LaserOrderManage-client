import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./AddressItem.styles";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { getAddress, getPhoneNumber } from "@/src/lib/utils/utils";

interface IAddressItemProps {
  data: IDeliveryAddress;
  selectedId: number | undefined;
  onSelect: (id: number) => void;
}

export default function AddressItem(props: IAddressItemProps) {
  return (
    <S.AddressItem 
      isSelect={props.data.id === props.selectedId} 
      onClick={() => props.onSelect(props.data.id)}
    >
      <div className="flex-row-align-center">
        <p className="bold16">{props.data.name}</p>
        <Spacer width="11px" height="100%" />
        <p className="medium16">{getAddress(props.data.address, props.data.detailAddress)}</p>
        {props.data.isDefault && (
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
        {`${props.data.receiver} · ${getPhoneNumber(props.data.phone1)}`}
      </S.AddressUserInfo>
    </S.AddressItem>
  );
}
