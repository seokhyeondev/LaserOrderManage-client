import { useRef, MouseEvent, useEffect } from "react";
import styled from "@emotion/styled";

interface ICommonModalProps extends IModalProps {
  children: JSX.Element;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({
  isOpen,
  children,
  onClose,
}: ICommonModalProps) {
  const modalRef = useRef(null);

  const handleOutsideClick = (event: MouseEvent<HTMLElement>) => {
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay
      className="flex-center"
      onClick={handleOutsideClick}
      ref={modalRef}
    >
      {children}
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;
