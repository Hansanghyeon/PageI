import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { TimelineLite, Power1 } from 'gsap';
import { Fade } from 'react-reveal';
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

interface imgSrcProps {
  imgSrc: string;
}
const FadeImg: React.FC<imgSrcProps> = ({ imgSrc }: imgSrcProps) => (
  <Fade duration={3000} distance={'50%'}>
    <img src={imgSrc} alt="" />
  </Fade>
);

interface AnimationRowImgTpye extends ImageWrapType {
  imgSrc: string | Array<string>;
  fluid?: boolean;
}
const AnimationRowImg: React.FC<AnimationRowImgTpye> = ({
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
                <FadeImg imgSrc={imgSrc[0]} />
              </Col>
              <Col col noGutter={fluid} style={{ textAlign: 'right' }}>
                <FadeImg imgSrc={imgSrc[1]} />
              </Col>
            </>
          ) : (
            <Col col>
              <FadeImg imgSrc={imgSrc} />
            </Col>
          )}
        </Row>
      </Container>
    </CustomImageWrap>
  );
};

export default AnimationRowImg;
