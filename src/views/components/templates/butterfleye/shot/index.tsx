import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// Components
import AnimationRowImg, { AnimationRowImg2 } from '@molecule/AnimationRowImg';
import ImageWrap from '@atom/wrap/Image';

const AnimationRowImg2Wrap = styled.div`
  img {
    width: auto;
    max-height: 360px;
  }
`;

const Shot = () => {
  const singleImg = [
    'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/bu-eye-001.jpg',
    'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/bu-eye-002.jpg',
    'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/Butterfleye1.jpg',
    'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/bu-eye-003-scaled-1.jpg',
    'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/2차-수정-진행사항-scaled.jpg',
  ];
  const aniSingleImg = [
    'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/Butterfleye3-1.jpg',
    'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/Butterfleye4realreal.jpg',
    'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/Butterfleye6.jpg',
  ];
  return (
    <>
      <AnimationRowImg2Wrap>
        <AnimationRowImg2
          bgColor="transparent"
          imgSrc={[
            'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/butterfleye.png',
            'https://wp.kihyeon.page/wp-content/uploads/project/butterfleye/butterfly.jpg',
          ]}
        />
      </AnimationRowImg2Wrap>
      {aniSingleImg.map(img => (
        <AnimationRowImg bgColor="transparent" imgSrc={img} />
      ))}
      {singleImg.map(img => (
        <ImageWrap bgColor="transparent" style={{ marginBottom: '4rem' }}>
          <Container>
            <Row>
              <Col col>
                <img src={img} alt="" />
              </Col>
            </Row>
          </Container>
        </ImageWrap>
      ))}
    </>
  );
};

export default Shot;
