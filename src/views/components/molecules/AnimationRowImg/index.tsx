import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { TimelineLite, Power1 } from 'gsap';
// Utils
import { rhythm } from '@style/typography';

const ImageWrap = styled.div`
  text-align: center;
  background-color: #dbdbdb;
  font-size: 0;
  line-height: 0;
  img {
    margin-bottom: 0;
    opacity: 0.2;
  }
  ${Row} {
    margin-bottom: ${rhythm(4)};
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

export default AnimationRowImg;
