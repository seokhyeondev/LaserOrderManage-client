import { media } from "@/src/styles/theme";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import LoadingBox from "../../commons/loading/LoadingBox.index";

const VideoSection = () => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <Wrapper className="flex-column-center">
      <Title>소개 영상</Title>
      <VideoWrapper ref={videoRef}>
        {load ? (
          <Video
            src="https://www.youtube.com/embed/7T146xdaREs"
            title="intro-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          />
        ) : (
          <LoadingWrapper className="flex-center">
            <LoadingBox backgroundColor="var(--color-white)" />
          </LoadingWrapper>
        )}
      </VideoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-block: 100px;
  background-color: var(--color-white);
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 48px;
  ${media.mobile} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const VideoWrapper = styled.div``;

const Video = styled.iframe`
  width: 690px;
  height: 500px;
  border-radius: 8px;
  ${media.mobile} {
    width: 320px;
    height: 232px;
    border-radius: 4.8px;
  }
`;

const LoadingWrapper = styled.div`
  width: 690px;
  height: 500px;
  border-radius: 8px;
  ${media.mobile} {
    width: 320px;
    height: 232px;
    border-radius: 4.8px;
  }
`;

export default VideoSection;
