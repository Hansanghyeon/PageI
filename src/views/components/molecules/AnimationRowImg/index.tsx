import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { TimelineLite, Power1 } from 'gsap';
// Utils
import { rhythm } from '@style/typography';
// Type
import ImageWrap, { ImageWrapType } from '@atom/wrap/Image';

const CustomImageWrap = styled(ImageWrap)`
  img {
    opacity: 0.2;
  }
  ${Row} {
    margin-bottom: ${rhythm(2)};
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
// const imgObserver = new IntersectionObserver(ImgAnimationCallback, {
//   threshold: 0.7,
// });

interface AnimationRowImgTpye extends ImageWrapType {
  imgSrc: string;
}
const AnimationRowImg = ({
  imgSrc,
  bgColor,
  fullscreen,
}: AnimationRowImgTpye) => {
  const Img = useRef<HTMLImageElement>(null);
  const imgObserver = useRef();
  useEffect(() => {
    imgObserver.current = new IntersectionObserver(ImgAnimationCallback, {
      threshold: 0.7,
    });
    imgObserver.current.observe(Img.current);
  }, []);
  return (
    <CustomImageWrap bgColor={bgColor} fullscreen={fullscreen ? true : false}>
      <Container>
        <Row>
          <Col col>
            <img src={imgSrc} alt="" ref={Img} />
          </Col>
        </Row>
      </Container>
    </CustomImageWrap>
  );
};

interface AnimationRowImgTpye2 extends ImageWrapType {
  imgSrc: Array<string>;
  fluid?: boolean;
}
export const AnimationRowImg2 = ({
  imgSrc,
  bgColor,
  fullscreen,
  fluid,
}: AnimationRowImgTpye2) => {
  const Img1 = useRef<HTMLImageElement>(null);
  const Img2 = useRef<HTMLImageElement>(null);
  const imgObserver = useRef();
  useEffect(() => {
    imgObserver.current = new IntersectionObserver(ImgAnimationCallback, {
      threshold: 0.7,
    });
    imgObserver.current.observe(Img1.current);
    imgObserver.current.observe(Img2.current);
  });
  return (
    <CustomImageWrap bgColor={bgColor} fullscreen={fullscreen ? true : false}>
      <Container fluid={fluid}>
        <Row>
          <Col col noGutter={fluid} style={{ textAlign: 'left' }}>
            <img src={imgSrc[0]} alt="" ref={Img1} />
          </Col>
          <Col col noGutter={fluid} style={{ textAlign: 'right' }}>
            <img src={imgSrc[1]} alt="" ref={Img2} />
          </Col>
        </Row>
      </Container>
    </CustomImageWrap>
  );
};

export default AnimationRowImg;
