import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";

const PartnerSection = () => {
  return (
    <Wrapper>
      <InnerWrapper className="flex-column-center">
        <Title>
          {"금오 레이저는 다양한 협력기관과 "}
          <Br />
          {"함께하고 있습니다."}
        </Title>
        <Announce>
          {"끊임없는 연구개발과 협력기관과의 시너지를 통해 "}
          <Br />
          {"고객에게 최상의 서비스를 제공합니다."}
        </Announce>
        <LogosWrapper>
          {Array.from({ length: 7 }, (_, i) => i + 1).map((el) => (
            <Logo
              key={el}
              src={`/images/partner_logo${el}.png`}
              alt={`partner_logo${el}`}
            />
          ))}
        </LogosWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding-top: 120px;
  padding-bottom: 100px;
  margin: 0 auto;
  background-color: var(--color-white);
  ${media.tablet} {
    padding-inline: 84px;
  }
  ${media.mobile} {
    padding-inline: 24px;
  }
`;

const InnerWrapper = styled.div``;

const Br = styled.br`
  display: none;
  ${media.mobile} {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  color: "#333";
  margin-bottom: 24px;
  text-align: center;
  ${media.mobile} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const Announce = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-normalGray);
  margin-bottom: 48px;
  text-align: center;
  ${media.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  ${media.tablet} {
    align-items: flex-start;
    align-content: flex-start;
    justify-content: center;
    gap: 24px 40px;
    flex-wrap: wrap;
  }
  ${media.mobile} {
    gap: 16px 32px;
  }
`;

const Logo = styled.img`
  width: fit-content;
  height: 80px;
  ${media.mobile} {
    height: 64px;
  }
`;

export default PartnerSection;
