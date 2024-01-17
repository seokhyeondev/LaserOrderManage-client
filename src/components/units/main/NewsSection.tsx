import { getDate } from "@/src/lib/utils/utils";
import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";
import Spacer from "../../commons/spacer/Spacer.index";

type INews = {
  id: number;
  title: string;
  content: string;
  sort: string;
  createdAt: string;
  imgUrl: string;
};

const NEWS_ITEMS: INews[] = [
  {
    id: 0,
    title:
      "타이틀 텍스트입니다. 타이틀 텍스트가 1줄 노출됩니다. 타이틀 텍스트입니다. 타이틀 텍스트가 1줄 노출됩니다. 타이틀 텍스트가 1줄 노출됩니다",
    content:
      "뉴스 내용글입니다. 내용 텍스트입니다. 뉴스 내용글입니다. 내용 텍스트입니다. 뉴스 내용글입니다. 내용 텍스트입니다. 뉴스 내용글입니다. 내용 텍스트입니다.",
    sort: "시사뉴스",
    createdAt: "2024-05-27",
    imgUrl: "/images/order_process4.webp",
  },
  {
    id: 1,
    title:
      "타이틀 텍스트입니다. 타이틀 텍스트가 1줄 노출됩니다. 타이틀 텍스트입니다. 타이틀 텍스트가 1줄 노출됩니다. 타이틀 텍스트가 1줄 노출됩니다",
    content:
      "뉴스 내용글입니다. 내용 텍스트입니다. 뉴스 내용글입니다. 내용 텍스트입니다. 뉴스 내용글입니다. 내용 텍스트입니다. 뉴스 내용글입니다. 내용 텍스트입니다.",
    sort: "시사뉴스",
    createdAt: "2024-05-27",
    imgUrl: "/images/order_process4.webp",
  },
  {
    id: 2,
    title:
      "타이틀 텍스트입니다. 타이틀 텍스트가 1줄 노출됩니다. 타이틀 텍스트입니다. 타이틀 텍스트가 1줄 노출됩니다. 타이틀 텍스트가 1줄 노출됩니다",
    content:
      "뉴스 내용글입니다. 내용 텍스트입니다. 뉴스 내용글입니다. 내용 텍스트입니다. 뉴스 내용글입니다. 내용 텍스트입니다. 뉴스 내용글입니다. 내용 텍스트입니다.",
    sort: "시사뉴스",
    createdAt: "2024-05-27",
    imgUrl: "/images/order_process4.webp",
  },
];

const NewsSection = () => {
  return (
    <Wrapper className="flex-column-center">
      <Title>News</Title>
      <Announce>다양한 제조지식을 확인하세요</Announce>
      <NewsWrapper className="flex-column-center">
        {NEWS_ITEMS.map((el) => (
          <NewsItem key={el.id} data={el} />
        ))}
      </NewsWrapper>
      <MoreButton className="medium18">더보기</MoreButton>
    </Wrapper>
  );
};

interface INewsItemProps {
  data: INews;
}

const NewsItem = ({ data }: INewsItemProps) => {
  return (
    <ItemWrapper>
      <ItemContentWrapper>
        <div className="flex-row">
          <ItemP1 className="bold14">{getDate(data.createdAt)}</ItemP1>
          <Spacer width="30px" height="100%" />
          <ItemP1 className="bold14">{data.sort}</ItemP1>
        </div>
        <ItemTitle>{data.title}</ItemTitle>
        <ItemContent>{data.content}</ItemContent>
      </ItemContentWrapper>
      <ItemImg src={data.imgUrl} alt={data.imgUrl} />
    </ItemWrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-block: 100px;
  background-color: #f9f9f9f9;
  ${media.tablet} {
    padding-inline: 52px;
  }
  ${media.mobile} {
    padding-inline: 0;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 24px;
`;

const Announce = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: var(--color-normalGray);
  text-align: center;
  margin-bottom: 48px;
`;

const MoreButton = styled.button`
  width: 160px;
  height: 70px;
  color: #333;
  background-color: var(--color-white);
  border: 1px solid #333;
  border-radius: var(--border-radius);
  margin-top: 48px;
`;

const NewsWrapper = styled.div`
  width: 100%;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;
  padding-block: 24px;
  gap: 190px;
  border-top: 1px solid #ddd;
  cursor: pointer;
  ${media.tablet} {
    width: 100%;
    gap: 60px;
  }
  ${media.mobile} {
    flex-direction: column-reverse;
    gap: 48px;
    padding-inline: 24px;
  }
  &:last-of-type {
    border-bottom: 1px solid #ddd;
  }
`;

const ItemContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  overflow: hidden;
`;

const ItemImg = styled.img`
  width: 290px;
  height: 180px;
  flex-shrink: 0;
  ${media.mobile} {
    width: 100%;
    height: 216px;
  }
`;

const ItemP1 = styled.p`
  line-height: 14px;
`;

const ItemTitle = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  margin-block: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${media.mobile} {
    font-size: 20px;
    line-height: 26px;
    white-space: pre-line;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const ItemContent = styled.p`
  width: 100%;
  font-size: 18px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${media.mobile} {
    line-height: 27px;
    white-space: pre-line;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export default NewsSection;
