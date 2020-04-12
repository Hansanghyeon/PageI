import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { TimelineLite, Power1 } from 'gsap';
// Utils
import { rhythm } from '@style/typography';
// Components
import ImageWrap from '@atom/wrap/Image';

const InteractionImagWrap = styled.div`
  img {
    opacity: 0.2;
  }
  ${Row} {
    margin-bottom: ${rhythm(4)};
  }
`;
const ImageWrap2 = styled.div`
  background: linear-gradient(to top, #dbdbdb, transparent 50%);
  font-size: 0;
  line-height: 0;
  img {
    margin-bottom: 0;
  }
`;

const ImgAnimationCallback = (entries: any, observer: any) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      const tl = new TimelineLite();
      tl.to([entry.target], 0.45, {
        ease: Power1.easeOut,
        opacity: '1',
      });
      observer.unobserve(entry.target);
    }
  });
};
const imgObserver = new IntersectionObserver(ImgAnimationCallback, {
  threshold: 0.7,
});

interface AnimationRowImgTpye {
  imgSrc: string;
}
const AnimationRowImg = ({ imgSrc }: AnimationRowImgTpye) => {
  const Img = useRef<HTMLImageElement>(null);
  useEffect(() => {
    imgObserver.observe(Img.current);
  });
  return (
    <ImageWrap>
      <Container>
        <Row>
          <Col col>
            <img src={imgSrc} alt="" ref={Img} />
          </Col>
        </Row>
      </Container>
    </ImageWrap>
  );
};
const SoundspotShot = () => {
  return (
    <InteractionImagWrap>
      <AnimationRowImg imgSrc="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/프론트-렌더.3-min.png" />
      <AnimationRowImg imgSrc="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/퍼스펙_최종본-min.png" />
      <AnimationRowImg imgSrc="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/퍼스펙_렌더1.130-min.png" />
      <AnimationRowImg imgSrc="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/백뷰-디테일.124-min.jpg" />
      <AnimationRowImg imgSrc="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/자산-12-min.png" />
      <AnimationRowImg imgSrc="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/탑뷰_최종본-min.png" />
    </InteractionImagWrap>
  );
};

export default SoundspotShot;
