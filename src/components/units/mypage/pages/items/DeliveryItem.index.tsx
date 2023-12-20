import styled from "@emotion/styled";
import { MouseEvent, useRef, useState } from "react";
import ItemMenus, {
  ItemMenuTitle,
} from "@/src/components/commons/menu/item/ItemMenus.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";

export default function DeliveryItem() {
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
        <div className="flex-row-align-center">
          <Name className="bold14">회원 주소</Name>
          <Spacer width="10px" height="100%" />
          <BasicLabel className="bold10 flex-center">기본 배송지</BasicLabel>
        </div>
        <Spacer width="100%" height="12px" />
        <p className="regular14">
          [01234] 서울시 마포구 성미산로 100, 상세 주소
        </p>
        <Spacer width="100%" height="10px" />
        <Infos className="regular12">
          김우리 · 010-1111-1111 · 010-2222-2222
        </Infos>
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
