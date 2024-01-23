import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  width: 900px;
  height: 800px;
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
  transition: all ease 0.3s;
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
  transition: all ease 0.3s;
`;

export const LoadOrderItemDate = styled.p`
  color: var(--color-darkGray);
`;

export const LoadButton = styled.button`
  width: 100%;
  height: 60px;
  color: var(--color-white);
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  &:disabled {
    background-color: var(--color-mediumGray);
  }
`;

export const CancelButton = styled.button`
  width: 144px;
  height: 60px;
  color: var(--color-darkGray);
  background-color: var(--color-lightGray);
  border-radius: var(--border-radius);
`;
