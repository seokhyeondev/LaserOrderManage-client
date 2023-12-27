import styled from "@emotion/styled";
import { MouseEvent, useRef, useState } from "react";
import ItemMenus, {
  ItemMenuTitle,
} from "@/src/components/commons/menu/item/ItemMenus.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { getFullAddress, getPhoneNumber } from "@/src/lib/utils/utils";

interface IDeliveryItemProps {
  data: IDeliveryAddress;
  onEdit: () => void;
  onDelete: () => void;
}

export default function DeliveryItem({
  data,
  onEdit,
  onDelete,
}: IDeliveryItemProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const onMenuOutside = (event: MouseEvent<HTMLElement>) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  const getReceiverInfos = (
    receiver: string,
    phone1: string,
    phone2: string | null,
  ) => {
    if (phone2) {
      return `${receiver} · ${getPhoneNumber(phone1)} · ${getPhoneNumber(
        phone2,
      )}`;
    }
    return `${receiver} · ${getPhoneNumber(phone1)}`;
  };

  return (
    <Wrapper className="flex-row" onClick={onMenuOutside}>
      <BodyWrapper>
        <div className="flex-row-align-center">
          <Name className="bold14">{data.name}</Name>
          {data.isDefault && (
            <>
              <Spacer width="10px" height="100%" />
              <BasicLabel className="bold10 flex-center">
                기본 배송지
              </BasicLabel>
            </>
          )}
        </div>
        <Spacer width="100%" height="12px" />
        <p className="regular14">
          {getFullAddress(data.zipCode, data.address, data.detailAddress)}
        </p>
        <Spacer width="100%" height="10px" />
        <Infos className="regular12">
          {getReceiverInfos(data.receiver, data.phone1, data.phone2)}
        </Infos>
      </BodyWrapper>
      <ItemMenus
        show={showMenu}
        menuRef={menuRef}
        toggleMenu={() => setShowMenu(!showMenu)}
      >
        <>
          <ItemMenuTitle className="regular14" onClick={onEdit}>
            수정하기
          </ItemMenuTitle>
          <ItemMenuTitle
            className="regular14"
            isAlert={true}
            onClick={onDelete}
          >
            삭제하기
          </ItemMenuTitle>
        </>
      </ItemMenus>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 28px;
  background-color: var(--color-white);
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const BodyWrapper = styled.div`
  flex-grow: 1;
`;

const Name = styled.p``;

const BasicLabel = styled.p`
  width: 60px;
  height: 20px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius);
`;

const Infos = styled.p`
  color: var(--color-darkGray);
`;
