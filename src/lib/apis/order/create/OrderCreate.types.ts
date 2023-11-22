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

export interface IDeliveryAddress {
    id: number;
    name: string;
    zipCode: string;
    address: string;
    detailAddress: string;
    receiver: string;
    phone1: string;
    phone2: string | null;
    isDefault: boolean;
    isDeleted: boolean;
}

export interface IOrderHistoryResponse {
    id: number;
    name: string;
    manufacturingList: string[];
    postProcessingList: string[] | null;
    drawingList: IDrawing[];
    request: string | null;
    deliveryAddress: IDeliveryAddress
}

export interface IOrderHistoryListResponse extends IBaseListResponse<IOrderHistory> {}

export interface IOrderHistory {
    id: number;
    name: string;
    imgUrl: string;
    createdAt: any;
}
