import { useCallback } from "react";
import { ErrorSetTypeKey } from "../error/ErrorSet";
import { useToastify } from "./useToastify";
import { AxiosError } from "axios";
import { DomainErrorSetTypeKey } from "../error/DomainErrorSetType";
import { notificationToAdmin, unknownError } from "../error/commonComment";
import { useRouter } from "next/router";
import { AppPages } from "../constants/appPages";

export interface ICustomErrorResponse {
  errorCode: string;
  message: string;
}

const ErrorSort = ["COMMON", "USER", "ORDER", "CUSTOMER", "FACTORY"];

export const errorCodeSpliter = (error: AxiosError) => {
  const errorResponse = error.response?.data as ICustomErrorResponse;
  const { errorCode, message } = errorResponse;
  const codeInfo = errorCode.split("_");
  const errorSort = codeInfo[0] as ErrorSetTypeKey;
  const status = Number(codeInfo[1]) as DomainErrorSetTypeKey;
  const errorNumber = Number(codeInfo[2]);
  return { errorSort, status, errorNumber, message };
};

export const useApiError = () => {
  const { setToast } = useToastify();
  const router = useRouter();

  const handleError = useCallback((error: AxiosError) => {
    const { errorSort, status, errorNumber, message } = errorCodeSpliter(error);

    if (ErrorSort.includes(errorSort)) {
      switch (status) {
        case 400:
          if (errorSort === "ORDER" || errorSort === "CUSTOMER") {
            setToast({ comment: message });
          } else {
            setToast({ comment: "잘못된 요청입니다." });
          }
          break;

        case 401:
          if (!(errorSort === "USER" && errorNumber === 2)) {
            router.push(AppPages.LOGIN);
          }
          break;

        case 403:
          router.push(AppPages.LOGIN);
          break;

        case 404:
        case 413:
          setToast({ comment: message });
          break;

        case 405:
          if (process.env.NODE_ENV === "development") {
            console.log(message);
          }
          break;

        case 500:
          let comment = message;
          if (errorNumber === 4) comment = "업로드가 불가능합니다.";
          setToast({ comment: comment });
          break;

        default:
          setToast({ comment: notificationToAdmin });
          break;
      }
    } else {
      setToast({ comment: unknownError });
    }
  }, []);
  return { handleError } as const;
};
