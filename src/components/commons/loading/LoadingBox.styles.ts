import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface IRingProps {
  size: string;
  backgroundColor: string;
}

export const Ring = styled.div<IRingProps>`
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: var(--border-radius);
  background-color: ${(props) => props.backgroundColor};

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 25%;
    left: 25%;
    transform: translate(-25%, -25%);
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    margin: 8px;
    border: 8px solid var(--color-primary);
    border-radius: 50%;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--color-primary) transparent transparent transparent;
  }

  div:nth-of-type(1) {
    animation-delay: -0.45s;
  }

  div:nth-of-type(2) {
    animation-delay: -0.3s;
  }

  div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
`;
