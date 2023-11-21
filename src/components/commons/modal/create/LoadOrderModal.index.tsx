import Spacer from "../../spacer/Spacer.index";
import Modal from "../Modal.index";
import * as S from "./LoadOrderModal.styles";
import Image from "next/image";
import { IModalProps } from "../Modal.index";
import LoadOrderSearchbar from "../../searchbars/create/LoadOrderSearchbar";

interface ILoadOrderModalProps extends IModalProps {
  callback: () => void;
}

export default function LoadOrderModal(props: ILoadOrderModalProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <S.ModalWrapper className="flex-column">
        <S.ModalTitle className="bold28">거래 불러오기</S.ModalTitle>
        <Spacer width="100%" height="32px" />
        <LoadOrderSearchbar
          placeholder="거래 이름으로 검색하기"
          onChangeSearchBar={() => {}}
          onActiveEnter={() => {}}
          onSearchKeyword={() => {}}
        />
        <S.ModalContentWrapper>
          <S.LoadOrderItem isSelect={true} className="flex-row-align-center">
            <Image
              width={100}
              height={100}
              src="/images/netflix.webp"
              alt=""
              style={S.LoadOrderItemImage}
            />
            <div>
              <S.LoadOrderItemTitle className="medium24" isSelect={true}>
                실리콘 부품 제작 프로젝트
              </S.LoadOrderItemTitle>
              <S.LoadOrderItemDate className="medium16">
                거래 일자: 2023. 08. 30
              </S.LoadOrderItemDate>
            </div>
          </S.LoadOrderItem>
        </S.ModalContentWrapper>
        <div className="flex-row">
          <S.CancelButton className="bold20" onClick={props.onClose}>
            취소
          </S.CancelButton>
          <Spacer width="15px" height="100%" />
          <S.LoadButton
            className="bold20"
            isActive={true}
            onClick={props.callback}
          >
            불러오기
          </S.LoadButton>
        </div>
      </S.ModalWrapper>
    </Modal>
  );
}
