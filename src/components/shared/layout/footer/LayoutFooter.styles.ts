import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  margin: 0 auto;
  height: 198px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-grayBlack);

  ${media.pc} {
    padding-inline: 240px;
  }
  ${media.tablet} {
    padding-inline: 48px;
  }
  ${media.mobile} {
    height: 242px;
    padding-inline: 24px;
    flex-direction: column;
    justify-content: start;
  }
`;

export const LogoWrapper = styled.div`
  margin-top: 70px;
  ${media.mobile} {
    margin-top: 40px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  ${media.mobile} {
    align-items: start;
    margin-top: 24px;
  }
`;

export const WebLink = styled.a`
  color: var(--color-white);
  &:hover {
    text-decoration: underline;
  }
`;

export const InfoText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
`;
