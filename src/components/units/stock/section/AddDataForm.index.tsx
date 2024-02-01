import * as S from "./EditDataForm.styls";
import { useOrderDetailScroll } from "@/src/lib/hooks/useScroll";
import { useToastify } from "@/src/lib/hooks/useToastify";
import { useRouter } from "next/router";
import TrashIcon from "@/src/components/commons/icons/TrashIcon.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";

interface IStockProps {
  onClose: () => void;
}

export default function AddDataForm(props: IStockProps) {
  const router = useRouter();
  const scrollArgs = useOrderDetailScroll();
  const { setToast } = useToastify();

  return (
    <S.Wrapper>
      <S.Header>
        <h2>{"자재 추가하기"}</h2>
        <a className="flex-row-center">
          <TrashIcon size={16} onClick={() => {}} />
          <Spacer width="5px" height="100%" />
          <p className="medium16">자재 삭제하기</p>
        </a>
      </S.Header>
      <S.BodyWrapper>
        <S.Body>
          <S.ItemWrapper>
            <p className="bold16">재고 관리</p>
            <S.ItemBody>
              <S.Item>
                <div>재질</div>
                <S.InputWrapper>
                  <input placeholder="재질 입력" />
                </S.InputWrapper>
              </S.Item>
              <S.Item>
                <div>두께</div>
                <S.InputWrapper>
                  <input placeholder="두께 입력" />
                  <span>T</span>
                </S.InputWrapper>
              </S.Item>
              <S.Item>
                <div>크기</div>
                <S.InputWrapper>
                  <input placeholder="크기 입력" />
                  <span>단위</span>
                </S.InputWrapper>
              </S.Item>
              <S.Item>
                <div>무게</div>
                <S.InputWrapper>
                  <input placeholder="무게 입력" />
                  <span>개</span>
                </S.InputWrapper>
              </S.Item>
            </S.ItemBody>
          </S.ItemWrapper>
          <S.RightItemWrapper>
            <S.ItemWrapper>
              <p className="bold16">단가 정보</p>
              <S.ItemBody>
                <S.Item>
                  <div>구매 단가</div>
                  <S.InputWrapper>
                    <input />
                    <span>원</span>
                  </S.InputWrapper>
                </S.Item>
                <S.Item>
                  <div>판매 단가</div>
                  <S.InputWrapper>
                    <input />
                    <span>원</span>
                  </S.InputWrapper>
                </S.Item>
              </S.ItemBody>
            </S.ItemWrapper>
            {!props.orderId && (
              <S.ItemWrapper>
                <p className="bold16">재고 정보</p>
                <S.ItemBody>
                  <S.Item>
                    <div>적정 재고</div>
                    <S.InputWrapper>
                      <input />
                      <span>원</span>
                    </S.InputWrapper>
                  </S.Item>
                </S.ItemBody>
              </S.ItemWrapper>
            )}
          </S.RightItemWrapper>
        </S.Body>
        <S.Footer>
          <S.CancelButton onClick={props.onClose}>취소</S.CancelButton>
          <S.SaveButtoin>저장하기</S.SaveButtoin>
        </S.Footer>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
