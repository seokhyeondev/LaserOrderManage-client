import { useState } from "react";
import { IOrderModalContent } from "../../modal/order/OrderModal.types";

const useModal = (): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return [isOpen, onOpenModal, onCloseModal];
};

export const useOrderModal = () => {
  const [isOpen, onOpen, onClose] = useModal();
  const [content, setContent] = useState<IOrderModalContent>({
    name: "",
    request: "",
  });

  const onOpenWithContent = (content: IOrderModalContent) => {
    setContent(content);
    onOpen();
  };

  return { isOpen, content, onOpenWithContent, onClose };
};
