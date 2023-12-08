import { useRef, MouseEvent, useEffect } from "react";
import styled from "@emotion/styled";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

interface ICommonModalProps extends IModalProps {
  children: JSX.Element;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal(props: ICommonModalProps) {
  const modalRef = useRef(null);

  const handleOutsideClick = (event: MouseEvent<HTMLElement>) => {
    if (modalRef.current === event.target) {
      props.onClose();
    }
  };

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [props.isOpen]);

  if (!props.isOpen) {
    return null;
  }

  return (
    <ModalOverlay
      className="flex-center"
      onClick={handleOutsideClick}
      ref={modalRef}
    >
      {props.children}
    </ModalOverlay>
  );
}
