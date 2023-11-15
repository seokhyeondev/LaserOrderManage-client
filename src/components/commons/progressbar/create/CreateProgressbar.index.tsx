import Spacer from "../../spacer/Spacer.index";
import * as S from "./CreateProgressbar.styles";
import { ICreateProgressbarProps } from "./CreateProgressbar.types";

export default function CreateProgressbar(props: ICreateProgressbarProps) {
  return (
    <S.Wrapper>
      <S.TitleWrapper className="flex-row-align-center">
        <S.ProgressCircle className="flex-center" status="PROGRESS">
          <S.ProgressNumber className="bold20">
            {props.data.id + 1}
          </S.ProgressNumber>
        </S.ProgressCircle>
        <Spacer width="12px" height="100%" />
        <S.MenuTitle className="bold20" status="PROGRESS">
          {props.data.title}
        </S.MenuTitle>
      </S.TitleWrapper>
      {props.data.subMenus?.map((el) => (
        <S.SubMenuTitle className="medium16" status="PROGRESS" key={el.id}>
          {el.title}
        </S.SubMenuTitle>
      ))}
    </S.Wrapper>
  );
}
