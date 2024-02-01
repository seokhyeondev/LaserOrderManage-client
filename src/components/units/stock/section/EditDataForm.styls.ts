import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import exp from "constants";

const slideUp = keyframes`
  from {
    transform: translate(-50%, 100%)
  }
  to {
    transform:translate(-50%, 0);
  }
`;

export const Wrapper = styled.div`
  width: 1100px;
  height: 320px;
  border-radius: 10px 10px 0px 0px;
  border: 2px solid var(--Medium-Gray, #e5e5e5);
  background: var(--White, #fff);

  position: fixed;
  bottom: 0;
  animation: ${slideUp} 0.3s ease-in-out;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  padding: 18px 31px;
  border-bottom: 1px solid var(--Medium-Gray, #e5e5e5);
`;
export const BodyWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const ItemWrapper = styled.div`
  display: flex;
  width: 344px;
  justify-content: space-between;
`;

export const RightItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 204px;
  margin-top: -5px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:nth-child(2) {
    width: 120px;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
    padding: 5px 10px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-mediumGray);
  border-radius: 10px;
  position: relative;
  padding: 10px 0px 10px 10px !important;
  & > input {
    width: 100%;
    border: none;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }
  & > span {
    position: absolute;
    right: 10px;
    font-size: 14px;
    top: 50%;
    transform: translateY(-50%);
    margin-top: -1px;
  }
`;

export const LabelWrapper = styled.div`
  padding-right: 10px !important;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const CancelButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: var(--color-lightGray);
  color: var(--color-black);
  border-radius: var(--border-radius);
  font-weight: 700;
`;

export const SaveButtoin = styled.button`
  width: 200px;
  height: 50px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius);
  font-weight: 700;
`;
