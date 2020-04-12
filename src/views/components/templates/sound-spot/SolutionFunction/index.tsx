import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// Components
import { rhythm } from '@style/typography';
import ImageWrap from '@atom/wrap/Image';
import SectionWrap from '@atom/wrap/project/Section';
import SectiontTitleText from '@atom/text/title/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';

const SolutionFunctionSectionWrap = styled(SectionWrap)`
  padding-left: 0;
  padding-right: 0;
  ${ImageWrap} {
    margin-bottom: ${rhythm(2)};
  }
`;
const SloganTitle = styled(SectiontTitleText)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.styleguid['$slate']};
`;

const SolutionFunctionSection = () => {
  return (
    <>
      <SolutionFunctionSectionWrap fluid>
        <ImageWrap>
          <img
            src="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/연출-이미지-3-min.png"
            alt=""
          />
        </ImageWrap>
        <Container>
          <SectionTitleRow>
            <Col col>
              <SectiontTitleText>[4] Solution & Function</SectiontTitleText>
            </Col>
            <Col col={12}>
              <SloganTitle>‘ YAMAHA - Soundsignage ’</SloganTitle>
            </Col>
          </SectionTitleRow>
          <Row style={{ marginBottom: rhythm(1) }}>
            <Col col={8}>
              <p>
                의 특징인 초지향성을 활용해 ‘사운드 스팟’을 구성하고, 필름형
                스피커의 얇고 가벼운 장점을 이용해 새로운 포지션의 ‘가정용
                초지향성 스피커’ 제안하고자 합니다.
              </p>
            </Col>
          </Row>
          <Row>
            <Col col={8}>
              <p>
                Using advantage of the directionality, which is characteristic
                of sound signage speaker, We suggest ‘Sound spot’ and use thin
                and light advantages of film speaker to propose a directional
                speaker of the new position using in home.
              </p>
            </Col>
          </Row>
        </Container>
      </SolutionFunctionSectionWrap>
    </>
  );
};

export default SolutionFunctionSection;
