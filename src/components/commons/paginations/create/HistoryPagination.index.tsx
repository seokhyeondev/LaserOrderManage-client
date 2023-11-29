import LeftIcon from "../../icons/LeftIcon.index";
import RightIcon from "../../icons/RightIcon.index";
import Spacer from "../../spacer/Spacer.index";

interface IHistoryPaginationProps {
  totalPage: number | undefined;
  hasBefore: boolean;
  hasNext: boolean;
  onClickBefore: () => void;
  onClickNext: () => void;
}

export default function HistoryPagination(props: IHistoryPaginationProps) {
  return (
    <>
      {props.totalPage && props.totalPage > 1 && (
        <div className="flex-center">
          <div className="flex-row-align-center">
            <LeftIcon
              isActive={props.hasBefore}
              onClick={props.onClickBefore}
            />
            <Spacer width="20px" height="100%" />
            <RightIcon isActive={props.hasNext} onClick={props.onClickNext} />
          </div>
        </div>
      )}
    </>
  );
}
