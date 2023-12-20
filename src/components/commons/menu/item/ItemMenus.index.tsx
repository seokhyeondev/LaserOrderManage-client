import styled from "@emotion/styled";
import { RefObject } from "react";
import MenuIcon from "../../icons/MenuIcon.index";
import { jsx } from "@emotion/react";

interface IItemMenusProps {
  show: boolean;
  menuRef: RefObject<HTMLDivElement>;
  children: jsx.JSX.Element;
  toggleMenu: () => void;
}

export default function ItemMenus({
  show,
  menuRef,
  children,
  toggleMenu,
}: IItemMenusProps) {
  return (
    <ItemMenuWrapper ref={menuRef} onClick={toggleMenu}>
      <ItemMenuBox className="flex-center">
        <MenuIcon size={24} />
      </ItemMenuBox>
      {show && <ItemMenu>{children}</ItemMenu>}
    </ItemMenuWrapper>
  );
}

const ItemMenuWrapper = styled.div`
  position: relative;
`;

const ItemMenuBox = styled.div`
  border-radius: 50%;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background-color: var(--color-lightGray);
  }
`;

const ItemMenu = styled.div`
  position: absolute;
  top: 28px;
  right: 0px;
  padding: 6px 5px;
  background-color: var(--color-white);
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

interface IItemMenuTitleProps {
  isAlert?: boolean;
}

export const ItemMenuTitle = styled.a<IItemMenuTitleProps>`
  display: block;
  width: 90px;
  padding: 8px 10px;
  transition: all ease 0.3s;
  cursor: pointer;
  color: ${(props) =>
    props.isAlert ? "var(--color-alert)" : "var(--color-black)"};
  &:hover {
    background-color: var(--color-lightGray);
  }
`;
