import CheckIcon from "../../icons/CheckIcon.index";
import Spacer from "../../spacer/Spacer.index";
import * as S from "./CreateProgressbar.styles";
import { ICreateProgressBarProps, MenuStatus } from "./CreateProgressbar.types";

export default function CreateProgressbar(props: ICreateProgressBarProps) {

  const TITLE_STATUS: MenuStatus = props.data.id < props.currentPageId ? "DONE" : props.data.id === props.currentPageId ? "PROGRESS" : "PENDING";

  return (
    <S.Wrapper>
      <S.TitleWrapper className="flex-row-align-center">
        <S.ProgressCircle className="flex-center" status={TITLE_STATUS}>
          {TITLE_STATUS === "DONE" ? (
            <CheckIcon isChecked={false} size={24} defaultColor="var(--color-white)"/>
            ) : (
            <S.ProgressNumber className="bold20">
            {props.data.id + 1}
            </S.ProgressNumber> 
            )
          }
        </S.ProgressCircle>
        <Spacer width="12px" height="100%" />
        <S.MenuTitle className="bold20" status={TITLE_STATUS}>
          {props.data.title}
        </S.MenuTitle>
      </S.TitleWrapper>
      {props.data.subMenus?.map((el) => (
        <S.SubMenuTitle className="medium16" status={props.data.id < props.currentPageId ? "DONE" : el.id <= props.currentSubPageId && props.data.id === props.currentPageId ? "PROGRESS" : "PENDING"} key={el.id}>
          {el.title}
        </S.SubMenuTitle>
      ))}
    </S.Wrapper>
  );
}
