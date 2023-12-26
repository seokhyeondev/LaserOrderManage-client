import styled from "@emotion/styled";
import { MouseEvent, useRef, useState } from "react";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import ItemMenus, {
  ItemMenuTitle,
} from "@/src/components/commons/menu/item/ItemMenus.index";

export default function ManagerItem() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const onMenuOutside = (event: MouseEvent<HTMLElement>) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  return (
    <Wrapper className="flex-row" onClick={onMenuOutside}>
      <BodyWrapper>
        <Name className="bold14">김진태</Name>
        <Spacer width="100%" height="12px" />
        <Phone className="regular14">010-3333-3333</Phone>
      </BodyWrapper>
      <ItemMenus
        show={showMenu}
        menuRef={menuRef}
        toggleMenu={() => setShowMenu(!showMenu)}
      >
        <>
          <ItemMenuTitle className="regular14">수정하기</ItemMenuTitle>
          <ItemMenuTitle className="regular14" isAlert={true}>
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

const Phone = styled.p``;
