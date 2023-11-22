import CreateProgressbar from "../../progressbar/create/CreateProgressbar.index";
import Spacer from "../../spacer/Spacer.index";
import * as S from "./CreateOrderMenu.styles";
import { ICreateOrderMenuProps } from "./CreateOrderMenu.types";

export default function CreateOrderMenu(props: ICreateOrderMenuProps) {
  return (
    <S.Wrapper>
      <S.Title className="bold24">견적 요청하기</S.Title>
      <Spacer width="100%" height="36px" />
      {props.pages.map((el) => (
        <CreateProgressbar data={el} key={el.id} currentPageId={props.currentPageId} currentSubPageId={props.currentSubPageId}/>
      ))}
    </S.Wrapper>
  );
}
