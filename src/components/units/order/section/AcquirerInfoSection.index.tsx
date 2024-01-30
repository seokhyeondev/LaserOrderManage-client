import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import { IAcquirerInfoSectionProps } from "./OrderDetailSection.types";
import { getPhoneNumber } from "@/src/lib/utils/utils";
import { BLUR_URL_2_1 } from "@/src/lib/constants/constant";

export default function AcquierInfoSection({
  data,
}: IAcquirerInfoSectionProps) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title className="bold18">인수자 정보</S.Title>
      </S.TitleWrapper>
      <S.Section className="flex-row">
        <S.SectionInnerWrapper>
          <Spacer width="100%" height="20px" />
          <S.InfoWrapper className="flex-row">
            <S.Label className="regular16">인수자 이름</S.Label>
            <S.Content className="regular16">{data.name}</S.Content>
          </S.InfoWrapper>
          <S.InfoWrapper className="flex-row">
            <S.Label className="regular16">인수자 연락처</S.Label>
            <S.Content className="regular16">
              {getPhoneNumber(data.phone)}
            </S.Content>
          </S.InfoWrapper>
        </S.SectionInnerWrapper>
        <S.ImageWrapper>
          <S.SignatureImage
            src={data.signatureFileUrl}
            alt={data.signatureFileName}
            fill
            placeholder="blur"
            blurDataURL={BLUR_URL_2_1}
          />
        </S.ImageWrapper>
      </S.Section>
    </S.Wrapper>
  );
}
