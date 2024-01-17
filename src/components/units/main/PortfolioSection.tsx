import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";
import { useState } from "react";
import manufacturingImg1 from "@/public/images/manufacturing1.webp";
import manufacturingImg2 from "@/public/images/manufacturing2.webp";
import manufacturingImg3 from "@/public/images/manufacturing3.webp";
import portfolioImg1 from "@/public/images/portfolio1.webp";
import portfolioImg2 from "@/public/images/portfolio2.webp";
import portfolioImg3 from "@/public/images/portfolio3.webp";
import portfolioImg4 from "@/public/images/portfolio4.webp";
import { StaticImageData } from "next/image";
import ResponsiveImage from "../../commons/image/ResponsiveImage.index";

const MANUFACTURING_ITEMS: IManufacturingItem[] = [
  {
    id: 1,
    title: "레이저 가공",
    content:
      "평판부터 3D 원형, 사각형 파이프 가공을\n대량의 MAZAK 레이저 기기를 통해 제공합니다.",
    image: manufacturingImg1,
  },
  {
    id: 2,
    title: "절곡",
    content:
      "AMADA와 TOYOKOKI의 하이엔드 절곡기 머신과\n업계 최고의 절곡 기술을 보유하고 있습니다.",
    image: manufacturingImg2,
  },
  {
    id: 3,
    title: "용접 및 후처리",
    content:
      "업계 최고의 용접기술과 로봇 용접기를 통해\n깔끔하고 세밀한 제품으로 제공해 드리고 있습니다.",
    image: manufacturingImg3,
  },
];

const PORTFOLIO_ITEMS: IPortfolioItem[] = [
  {
    title: "로봇 용접기",
    content: "원하는 파트너를 직접 찾아\n상담 및 견적을 요청할 수 있습니다1.",
    image: portfolioImg1,
  },
  {
    title: "파이프 레이저 장비",
    content: "원하는 파트너를 직접 찾아\n상담 및 견적을 요청할 수 있습니다2.",
    image: portfolioImg2,
  },
  {
    title: "레이저가공기",
    content: "원하는 파트너를 직접 찾아\n상담 및 견적을 요청할 수 있습니다3.",
    image: portfolioImg3,
  },
  {
    title: "절곡기",
    content: "원하는 파트너를 직접 찾아\n상담 및 견적을 요청할 수 있습니다3.",
    image: portfolioImg4,
  },
];

const PortfolioSection = () => {
  return (
    <Wrapper>
      <ItemsWrapper>
        {MANUFACTURING_ITEMS.map((el) => (
          <ManufacuringItem key={el.id} data={el} />
        ))}
      </ItemsWrapper>
      <PortfolioItem />
    </Wrapper>
  );
};

const ManufacuringItem = ({ data }: IManufacturingItemProps) => {
  return (
    <ItemWrapper>
      <ResponsiveImage
        src={data.image}
        alt={`manufacturing${data.id}`}
        Container={ItemBackgoundContainer}
        position="absolute"
      />
      <ItemOverlay />
      <ItemContentWrapper>
        <ItemTitle>{data.title}</ItemTitle>
        <ItemContent>{data.content}</ItemContent>
      </ItemContentWrapper>
    </ItemWrapper>
  );
};

const PortfolioItem = () => {
  const [index, setIndex] = useState(0);

  const onPrev = () => {
    setIndex(
      (prev) => (prev - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length,
    );
  };

  const onNext = () => {
    setIndex((prev) => (prev + 1) % PORTFOLIO_ITEMS.length);
  };

  return (
    <PortfolioWrapper>
      <PortfolioContentWrapper background="var(--color-black)">
        <PortfolioTitle key={`title-${index}`}>
          {PORTFOLIO_ITEMS[index].title}
        </PortfolioTitle>
        <PortfolioContent key={`content-${index}`}>
          {PORTFOLIO_ITEMS[index].content}
        </PortfolioContent>
        <PortfolioButtonsWrapper>
          <PortfolioButton
            src="/images/arrow_left.webp"
            alt="arrow_left"
            onClick={onPrev}
          />
          <PortfolioButton
            src="/images/arrow_right.webp"
            alt="arrow_right"
            onClick={onNext}
          />
        </PortfolioButtonsWrapper>
      </PortfolioContentWrapper>
      <PortfolioContentWrapper background="#f9f9f9">
        <ResponsiveImage
          key={`img-${index}`}
          src={PORTFOLIO_ITEMS[index].image}
          alt={`portfolio-${index}`}
          Container={PortfolioImgContainer}
        />
      </PortfolioContentWrapper>
    </PortfolioWrapper>
  );
};

type IManufacturingItem = {
  id: number;
  title: string;
  content: string;
  image: StaticImageData;
};

interface IManufacturingItemProps {
  data: IManufacturingItem;
}

type IPortfolioItem = {
  title: string;
  content: string;
  image: StaticImageData;
};

const Wrapper = styled.section`
  width: 100%;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${media.mobile} {
    flex-direction: column;
  }
`;

const ItemWrapper = styled.div`
  flex: 1;
  height: 800px;
  position: relative;
  ${media.mobile} {
    height: 330px;
  }
`;

const ItemBackgoundContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const ItemContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  margin: 0 auto;
  padding-block: 342px;
  ${media.tablet} {
    padding-inline: 20px;
  }
  ${media.mobile} {
    padding-block: 114px;
  }
`;

const ItemTitle = styled.h5`
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 24px;
  text-align: center;
  color: var(--color-white);
  ${media.mobile} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const ItemContent = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  white-space: pre-line;
  color: rgba(255, 255, 255, 0.7);
  ${media.tablet} {
    font-size: 18px;
    line-height: 26px;
  }
  ${media.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${media.tablet} {
    flex-direction: column-reverse;
  }
`;

interface IContentWrapperProps {
  background: string;
}

const PortfolioContentWrapper = styled.div<IContentWrapperProps>`
  position: relative;
  flex: 1;
  height: 750px;
  padding-block: 322px;
  padding-left: 120px;
  background-color: ${(props) => props.background};
  ${media.tablet} {
    flex: none;
    width: 100%;
  }
  ${media.mobile} {
    height: 550px;
    padding-block: 224px;
    padding-left: 52px;
  }
`;

const PortfolioTitle = styled.h3`
  font-size: 32px;
  line-height: 24px;
  margin-bottom: 24px;
  color: var(--color-white);
  ${media.mobile} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const PortfolioContent = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  white-space: pre-line;
  color: rgba(255, 255, 255, 0.7);
  ${media.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const PortfolioButtonsWrapper = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: flex-start;
  gap: 64px;
  bottom: 48px;
  right: 60px;
  ${media.tablet} {
    top: 80px;
    right: 80px;
    bottom: auto;
  }
  ${media.mobile} {
    top: 64px;
    right: 24px;
    gap: 48px;
  }
`;

const PortfolioButton = styled.img`
  width: 72px;
  height: 72px;
  transition: transform 0.3s ease;
  cursor: pointer;
  ${media.mobile} {
    width: 48px;
    height: 48px;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

const PortfolioImgContainer = styled.div`
  width: 100%;
  height: fit-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default PortfolioSection;
