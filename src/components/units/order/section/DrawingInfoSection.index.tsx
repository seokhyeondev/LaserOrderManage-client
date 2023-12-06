import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import EditIcon from "@/src/components/commons/icons/EditIcon.index";
import Image from "next/image";
import styled from "@emotion/styled";
import MenuIcon from "@/src/components/commons/icons/MenuIcon.index";
import { RefObject, useEffect, useRef, useState, MouseEvent } from "react";
import { IDetailDrawing } from "@/src/lib/apis/order/detail/OrderDetail.types";

interface IDrawingInfoSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
  data: IDetailDrawing[];
}

export default function DrawingInfoSection({
  sectionRef,
  data,
}: IDrawingInfoSectionProps) {
  const [drawings, setDrawings] = useState<IDetailDrawing[]>([]);

  useEffect(() => {
    setDrawings(data);
  }, [data]);

  const onAddDrawing = () => {};

  const onEditDrawing = (drawing: IDetailDrawing) => {};

  const onDeleteDrawing = (id: number) => {
    const updatedDrawings = drawings.filter((el) => el.id !== id);
    setDrawings(updatedDrawings);
  };

  return (
    <S.Wrapper ref={sectionRef}>
      <S.TitleWrapper className="flex-row-between">
        <S.Title className="bold18">도면 정보</S.Title>
        <S.EditBox className="flex-row" onClick={onAddDrawing}>
          <EditIcon size={20} />
          <Spacer width="5px" height="100%" />
          <S.EditBoxText className="regular16">도면 추가하기</S.EditBoxText>
        </S.EditBox>
      </S.TitleWrapper>
      <S.Section>
        <Spacer width="100%" height="10px" />
        {drawings.length === 0 ? (
          <EmptyDrawing className="regular16 flex-center">
            도면을 추가해주세요
          </EmptyDrawing>
        ) : (
          drawings.map((el) => (
            <DrawingInfoItem
              key={el.id}
              data={el}
              onEditDrawing={() => onEditDrawing(el)}
              onDeleteDrawing={() => onDeleteDrawing(el.id)}
            />
          ))
        )}

        <Spacer width="100%" height="10px" />
      </S.Section>
    </S.Wrapper>
  );
}

interface IDrawingInfoItemProps {
  data: IDetailDrawing;
  onEditDrawing: () => void;
  onDeleteDrawing: () => void;
}

function DrawingInfoItem({
  data,
  onEditDrawing,
  onDeleteDrawing,
}: IDrawingInfoItemProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const onMenuOutside = (event: MouseEvent<HTMLElement>) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  const onEdit = () => {
    onEditDrawing();
    setShowMenu(false);
  };

  return (
    <ItemWrapper className="flex-row-between" onClick={onMenuOutside}>
      <ItemInfoWrapper className="flex-row">
        <Image
          src={data.thumbnailUrl}
          width={120}
          height={120}
          style={ItemImage}
          alt={data.thumbnailUrl}
        />
        <ItemInfoTextWrapper>
          <p className="bold16">{data.fileName}</p>
          <Spacer width="100%" height="14px" />
          <div className="flex-row">
            <ItemLabel className="regular14">수량</ItemLabel>
            <p className="regular14">{`${data.count} 개`}</p>
          </div>
          <Spacer width="100%" height="12px" />
          <div className="flex-row">
            <ItemLabel className="regular14">재료</ItemLabel>
            <p className="regular14">{data.ingredient}</p>
          </div>
          <Spacer width="100%" height="12px" />
          <div className="flex-row">
            <ItemLabel className="regular14">두께</ItemLabel>
            <p className="regular14">{`${data.thickness} T`}</p>
          </div>
        </ItemInfoTextWrapper>
      </ItemInfoWrapper>
      <ItemMenuWrapper ref={menuRef} onClick={() => setShowMenu(!showMenu)}>
        <ItemMenuBox className="flex-center">
          <MenuIcon size={24} />
        </ItemMenuBox>
        {showMenu && (
          <ItemMenu>
            <ItemMenuTitle
              className="regular14"
              href={data.fileUrl}
              download={true}
            >
              다운로드
            </ItemMenuTitle>
            <ItemMenuTitle className="regular14" onClick={onEdit}>
              수정하기
            </ItemMenuTitle>
            <ItemMenuTitle className="regular14" onClick={onDeleteDrawing}>
              삭제하기
            </ItemMenuTitle>
          </ItemMenu>
        )}
      </ItemMenuWrapper>
    </ItemWrapper>
  );
}

const EmptyDrawing = styled.p`
  width: 100%;
  height: 160px;
`;

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

const ItemMenuTitle = styled.a`
  display: block;
  width: 90px;
  padding: 8px 10px;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    background-color: var(--color-lightGray);
  }
  &:last-of-type {
    color: var(--color-alert);
  }
`;
