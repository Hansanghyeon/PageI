import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { TimelineLite, Power1 } from 'gsap';
import { InView } from 'react-intersection-observer';
// Utils
import { rhythm } from '@style/typography';
// Type
import ImageWrap, { ImageWrapType } from '@atom/wrap/Image';

const CustomImageWrap = styled(ImageWrap)`
  .observerImg {
    opacity: 0.2;
  }
  ${Row} {
    margin-bottom: ${rhythm(2)};
  }
`;

const ImgAnimationCallback = (inView: boolean, entry: any): void => {
  if (inView && !entry.target.attributes.style) {
    const tl = new TimelineLite();
    tl.to([entry.target], 0.45, {
      ease: Power1.easeOut,
      opacity: '1',
    });
  }
};

interface imgSrcProps {
  imgSrc: string;
}
const InViewImg: React.FC<imgSrcProps> = ({ imgSrc }: imgSrcProps) => (
  <InView
    as="div"
    className="observerImg"
    threshold={0.7}
    onChange={ImgAnimationCallback}
  >
    <img src={imgSrc} alt="" />
  </InView>
);

interface AnimationRowImgTpye extends ImageWrapType {
  imgSrc: string | Array<string>;
  fluid?: boolean;
}
const AnimationRowImg = ({
  imgSrc,
  bgColor,
  fullscreen,
  fluid,
}: AnimationRowImgTpye) => {
  return (
    <CustomImageWrap bgColor={bgColor} fullscreen={fullscreen ? true : false}>
      <Container fluid={fluid}>
        <Row>
          {Array.isArray(imgSrc) ? (
            <>
              <Col col noGutter={fluid} style={{ textAlign: 'left' }}>
                <InViewImg imgSrc={imgSrc[0]} />
              </Col>
              <Col col noGutter={fluid} style={{ textAlign: 'right' }}>
                <InViewImg imgSrc={imgSrc[1]} />
              </Col>
            </>
          ) : (
            <Col col>
              <InViewImg imgSrc={imgSrc} />
            </Col>
          )}
        </Row>
      </Container>
    </CustomImageWrap>
  );
};

export default AnimationRowImg;
