import { IModalProps } from "../Modal.index";

export interface IOrderModalProps extends IModalProps {
  content: IOrderModalContent;
}

export interface IOrderModalContent {
  name: string;
  request: string;
}
