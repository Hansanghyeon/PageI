import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Fade } from 'react-reveal';
// Utils
import { rhythm } from '@style/typography';
// Type
import ImageWrap, { ImageWrapType } from '@atom/wrap/Image';

const CustomImageWrap = styled(ImageWrap)`
  ${Row} {
    margin-bottom: ${rhythm(2)};
  }
`;

interface imgSrcProps {
  imgSrc: string;
}
const FadeAndImgWrap = styled.div`
  font-size: 0;
  img {
    width: 100%;
    margin-bottom: 4rem;
  }
`;
const FadeImg: React.FC<imgSrcProps> = ({ imgSrc }: imgSrcProps) => (
  <FadeAndImgWrap>
    <Fade duration={1200}>
      <img src={imgSrc} alt="" />
    </Fade>
  </FadeAndImgWrap>
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
