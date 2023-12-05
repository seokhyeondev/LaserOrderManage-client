import styled from "@emotion/styled";

interface IMenuItemProps {
  isFocus: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 15px 20px 15px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

const Label = styled.p`
  margin-bottom: 26px;
`;

const MenuItem = styled.div<IMenuItemProps>`
  width: 100%;
  height: 55px;
  margin-bottom: 10px;
  padding-inline: 20px;
  border-radius: var(--border-radius);
  background-color: ${(props) =>
    props.isFocus ? "var(--color-primary)" : "var(--color-white)"};
  transition: all ease 0.3s;

  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.isFocus ? "var(--color-primary)" : "var(--color-lightGray)"};
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const MenuTitle = styled.p<IMenuItemProps>`
  color: ${(props) =>
    props.isFocus ? "var(--color-white)" : "var(--color-black)"};
`;

export default function OrderDetailMenu() {
  return (
    <Wrapper>
      <Label className="bold20">바로가기</Label>
      <MenuItem isFocus={true} className="flex-column">
        <MenuTitle isFocus={true} className="medium16">
          기본 정보
        </MenuTitle>
      </MenuItem>
      <MenuItem isFocus={false} className="flex-column">
        <MenuTitle isFocus={false} className="medium16">
          도면 정보
        </MenuTitle>
      </MenuItem>
      <MenuItem isFocus={false} className="flex-column">
        <MenuTitle isFocus={false} className="medium16">
          견적서/발주서
        </MenuTitle>
      </MenuItem>
    </Wrapper>
  );
}
