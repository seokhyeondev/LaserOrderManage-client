import CreateProgressbar from "../../progressbar/create/CreateProgressbar.index";
import Spacer from "../../spacer/Spacer.index";
import * as S from "./CreateOrderMenu.styles";
import { ICreateOrderMenuProps } from "./CreateOrderMenu.types";

export default function CreateOrderMenu({
  pages,
  currentPageId,
  currentSubPageId,
}: ICreateOrderMenuProps) {
  return (
    <S.Wrapper>
      <S.Title className="bold24">견적 요청하기</S.Title>
      <Spacer width="100%" height="36px" />
      {pages.map((el) => (
        <CreateProgressbar
          data={el}
          key={el.id}
          currentPageId={currentPageId}
          currentSubPageId={currentSubPageId}
        />
      ))}
    </S.Wrapper>
  );
}
