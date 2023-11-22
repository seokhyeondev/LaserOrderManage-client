import { IBaseListResponse } from "@/src/lib/apis/base/base.types"

export interface IOrderCreateRequest {
    name: string;
    manufacturing: string[];
    postProcessing: string[];
    drawingList: IDrawing[];
    request: string;
    deliveryAddressId: number;
    isNewIssue: boolean;
}

export interface IDrawing {
    thumbnailImgUrl: string;
    fileName: string;
    fileSize: string;
    fileType: string;
    fileUrl: string;
    count: number;
    ingredient: string;
}

export interface IOrderHistoryResponse extends IBaseListResponse<IOrderHistory> {}

export interface IOrderHistory {
    id: number;
    name: string;
    imgUrl: string;
    createdAt: any;
}
