import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 50px;

  ${media.tablet} {
    width: 600px;
  }
  ${media.mobile} {
    width: 95%;
  }
`;

export const Title = styled.p`
  width: 100%;
`;

export const Label = styled.p``;

export const Required = styled.p`
  margin-left: 4px;
  color: var(--color-alert);
`;

export const Content = styled.p`
  margin-top: 14px;
  margin-bottom: 48px;
`;

export const FileName = styled.a`
  display: flex;
  width: 100%;
  height: 55px;
  padding-inline: 24px;
  margin-top: 14px;
  margin-bottom: 48px;
  border: 1px solid var(--color-normalGray);
  border-radius: var(--border-radius);
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 14px;
  margin-bottom: 48px;
  padding-inline: 24px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);

  &:focus {
    border: 1px solid var(--color-black);
  }
  &::placeholder {
    color: var(--color-mediumGray);
  }
`;

export const RedoWrapper = styled.div`
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  color: var(--color-white);

  &:disabled {
    background-color: var(--color-mediumGray);
  }
`;
