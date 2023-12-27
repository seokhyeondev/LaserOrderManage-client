import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./MyPagePages.styles";
import { useState } from "react";
import ManagerItem from "./items/MangerItem.index";
import ManagerModal from "@/src/components/commons/modal/mypage/ManagerModal.index";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FactoryApi } from "@/src/lib/apis/user/factory/FactoryApi";
import { IOrderManager } from "@/src/lib/apis/user/factory/Factory.types";
import { useToastify } from "@/src/lib/hooks/useToastify";

export default function ManagerListPage() {
  const [showModal, setShowModal] = useState(false);
  const [targetData, setTargetData] = useState<IOrderManager | undefined>(
    undefined,
  );
  const { setToast } = useToastify();
  const { data, refetch } = useQuery({
    queryKey: ["getManagers"],
    queryFn: () => FactoryApi.GET_ORDER_MANAGER(),
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: FactoryApi.DELETE_ORDER_MANAGER,
    onSuccess: () => {
      refetch();
      setToast({ comment: "담당자를 삭제했어요" });
    },
    onError: () => {
      setToast({ comment: "담당자 삭제에 실패했어요" });
    },
  });

  const showModalWithData = (data: IOrderManager) => {
    setTargetData(data);
    setShowModal(true);
  };

  const showModalWithoutData = () => {
    setTargetData(undefined);
    setShowModal(true);
  };

  return (
    <>
      <S.Wrapper>
        <S.Title className="bold24">담당자 관리</S.Title>
        <S.BodyWrapper>
          <div>
            {data?.contents.map((el) => (
              <ManagerItem
                key={el.id}
                data={el}
                onEdit={showModalWithData}
                onDelete={() => deleteMutate(el.id)}
              />
            ))}
          </div>
          <Spacer width="100%" height="16px" />
          <S.AddWrapper
            className="regular14 flex-center"
            onClick={showModalWithoutData}
          >
            + 담당자 추가하기
          </S.AddWrapper>
        </S.BodyWrapper>
      </S.Wrapper>
      <ManagerModal
        isOpen={showModal}
        initData={targetData}
        onClose={() => setShowModal(false)}
        refetch={() => refetch()}
      />
    </>
  );
}
