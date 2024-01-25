import CheckIcon from "../../icons/CheckIcon.index";
import Spacer from "../../spacer/Spacer.index";
import * as S from "./CreateProgressbar.styles";
import { ICreateProgressBarProps, MenuStatus } from "./CreateProgressbar.types";

export default function CreateProgressbar({
  data,
  currentPageId,
  currentSubPageId,
}: ICreateProgressBarProps) {
  const TITLE_STATUS: MenuStatus =
    data.id < currentPageId
      ? "DONE"
      : data.id === currentPageId
      ? "PROGRESS"
      : "PENDING";

  return (
    <S.Wrapper>
      <S.TitleWrapper className="flex-row-align-center">
        <S.ProgressCircle className="flex-center" status={TITLE_STATUS}>
          {TITLE_STATUS === "DONE" ? (
            <CheckIcon
              isChecked={false}
              size={24}
              defaultColor="var(--color-white)"
            />
          ) : (
            <S.ProgressNumber className="bold20">
              {data.id + 1}
            </S.ProgressNumber>
          )}
        </S.ProgressCircle>
        <Spacer width="12px" height="100%" />
        <S.MenuTitle className="bold20" status={TITLE_STATUS}>
          {data.menu}
        </S.MenuTitle>
      </S.TitleWrapper>
      {data.subMenus.map((el) => (
        <S.SubMenuTitle
          className="medium16"
          status={
            data.id < currentPageId
              ? "DONE"
              : el.id <= currentSubPageId && data.id === currentPageId
              ? "PROGRESS"
              : "PENDING"
          }
          key={el.id}
        >
          {el.menu}
        </S.SubMenuTitle>
      ))}
    </S.Wrapper>
  );
}
