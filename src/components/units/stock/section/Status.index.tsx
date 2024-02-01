import { useState } from "react";
import * as S from "./Status.style";
import EditIcon from "@/src/components/commons/icons/EditIcon.index";
import StockDashboard from "@/src/components/commons/filters/stock/StockDashboard.index";
import StockFilter from "@/src/components/commons/filters/stock/StockFilter.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import EditDataForm from "./EditDataForm.index";
import AddDataForm from "./AddDataForm.index";

export default function StockStatus() {
  const [currentOrderId, setCurrentOrderId] = useState<
    string | null | undefined
  >(undefined);

  console.info("currentOrderId", currentOrderId);
  return (
    <>
      <S.BodyWrapper>
        <StockFilter />
        <StockDashboard />
        <S.BodyHeader>
          <a
            className="flex-row-center"
            onClick={() => setCurrentOrderId(null)}
          >
            <EditIcon size={16} />
            <Spacer width="5px" height="100%" />
            <p className="medium16">자재 추가하기</p>
          </a>
        </S.BodyHeader>
        <div>
          <S.Table>
            <S.TableHeader>
              <tr>
                <th rowSpan={2}>재 질</th>
                <th rowSpan={2}>두께</th>
                <th rowSpan={2}>크기</th>
                <th colSpan={4}>2024년 1월 14일 자재 재고 현황</th>
                <th rowSpan={2}>적정 재고</th>
              </tr>
              <tr>
                <th>전일 재고</th>
                <th>입고</th>
                <th>생산</th>
                <th>당일 재고</th>
              </tr>
            </S.TableHeader>
            <S.TableBody>
              <tr onClick={() => setCurrentOrderId("1")}>
                <td>$5,400</td>
                <td>1.6T</td>
                <td>4"8</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </S.TableBody>
          </S.Table>
        </div>
      </S.BodyWrapper>
      {currentOrderId ? (
        <EditDataForm
          orderId={currentOrderId}
          onClose={() => setCurrentOrderId(undefined)}
        />
      ) : currentOrderId !== undefined ? (
        <AddDataForm onClose={() => setCurrentOrderId(undefined)} />
      ) : null}
    </>
  );
}
