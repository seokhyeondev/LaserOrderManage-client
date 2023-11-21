import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  width: 900px;
  height: 900px;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 50px 40px 40px 40px;
`;

export const ModalTitle = styled.p``;

export const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

interface ILoadOrderItemProps {
  isSelect: boolean;
}

export const LoadOrderItem = styled.div<ILoadOrderItemProps>`
  width: 100%;
  height: 120px;
  padding: 20px 10px;
  margin-bottom: 15px;
  border: 1px solid
    ${(props) =>
      props.isSelect ? "var(--color-primary)" : "var(--color-mediumGray)"};
  border-radius: var(--border-radius);
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const LoadOrderItemImage = {
  borderRadius: "10px",
  marginRight: "24px",
};

export const LoadOrderItemTitle = styled.p<ILoadOrderItemProps>`
  color: ${(props) =>
    props.isSelect ? "var(--color-primary)" : "var(--color-black)"};
  margin-bottom: 10px;
`;

export const LoadOrderItemDate = styled.p`
  color: var(--color-darkGray);
`;

interface ILoadButtonProps {
  isActive: boolean;
}

export const LoadButton = styled.button<ILoadButtonProps>`
  width: 100%;
  height: 70px;
  color: var(--color-white);
  background-color: ${(props) =>
    props.isActive ? "var(--color-primary)" : "var(--color-mediumGray)"};
  border-radius: var(--border-radius);
`;

export const CancelButton = styled.button`
  width: 144px;
  height: 70px;
  color: var(--color-darkGray);
  background-color: var(--color-lightGray);
  border-radius: var(--border-radius);
`;
