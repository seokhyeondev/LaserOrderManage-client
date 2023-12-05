import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import EditIcon from "@/src/components/commons/icons/EditIcon.index";
import Image from "next/image";
import styled from "@emotion/styled";
import MenuIcon from "@/src/components/commons/icons/MenuIcon.index";

export default function DrawingInfoSection() {
  return (
    <S.Wrapper>
      <S.TitleWrapper className="flex-row-between">
        <S.Title className="bold18">도면 정보</S.Title>
        <S.EditBox className="flex-row">
          <EditIcon size={20} />
          <Spacer width="5px" height="100%" />
          <S.EditBoxText className="regular16">도면 추가하기</S.EditBoxText>
        </S.EditBox>
      </S.TitleWrapper>
      <S.Section>
        <Spacer width="100%" height="10px" />
        <DrawingInfoItem />
        <Spacer width="100%" height="10px" />
      </S.Section>
    </S.Wrapper>
  );
}

const ItemWrapper = styled.div`
  padding-block: 20px;
`;

const ItemInfoWrapper = styled.div``;

const ItemImage = {
  borderRadius: "10px",
  marginRight: "20px",
};

const ItemInfoTextWrapper = styled.div`
  padding-top: 8px;
`;

const ItemLabel = styled.p`
  width: 44px;
  color: var(--color-darkGray);
`;

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
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

const ItemMenuTitle = styled.div`
  width: 90px;
  padding: 6px 10px;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    background-color: var(--color-lightGray);
  }
  &:last-of-type {
    color: var(--color-alert);
  }
`;

function DrawingInfoItem() {
  return (
    <ItemWrapper className="flex-row-between">
      <ItemInfoWrapper className="flex-row">
        <Image
          src="/images/netflix.webp"
          width={120}
          height={120}
          style={ItemImage}
          alt=""
        />
        <ItemInfoTextWrapper>
          <p className="bold16">BodyPart.dxm</p>
          <Spacer width="100%" height="14px" />
          <div className="flex-row">
            <ItemLabel className="regular14">수량</ItemLabel>
            <p className="regular14">4개</p>
          </div>
          <Spacer width="100%" height="12px" />
          <div className="flex-row">
            <ItemLabel className="regular14">재료</ItemLabel>
            <p className="regular14">SS</p>
          </div>
          <Spacer width="100%" height="12px" />
          <div className="flex-row">
            <ItemLabel className="regular14">두께</ItemLabel>
            <p className="regular14">3T</p>
          </div>
        </ItemInfoTextWrapper>
      </ItemInfoWrapper>
      <ItemMenuWrapper>
        <ItemMenuBox className="flex-center">
          <MenuIcon size={24} />
        </ItemMenuBox>
        <ItemMenu>
          <ItemMenuTitle className="regular14">다운로드</ItemMenuTitle>
          <ItemMenuTitle className="regular14">수정하기</ItemMenuTitle>
          <ItemMenuTitle className="regular14">삭제하기</ItemMenuTitle>
        </ItemMenu>
      </ItemMenuWrapper>
    </ItemWrapper>
  );
}
