import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
// Components
import { rhythm } from '@style/typography';
import ImageWrap from '@atom/wrap/Image';
import SectionWrap from '@atom/wrap/project/Section';
import SectiontTitleText from '@atom/text/title/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';
import SloganTitle from '@atom/text/title/Slogan';

const SolutionFunctionSection = () => {
  return (
    <>
      <ImageWrap style={{ marginTop: rhythm(4) }}>
        <img src={`${process.env.GATSBY_FILE_SERVER}/3-min.png`} alt="" />
      </ImageWrap>
      <SectionWrap>
        <SectionTitleRow>
          <Col col>
            <SectiontTitleText>[4] Solution & Function</SectiontTitleText>
          </Col>
          <Col col={12}>
            <SloganTitle>‘ YAMAHA - Soundsignage ’</SloganTitle>
          </Col>
        </SectionTitleRow>
        <Row style={{ marginBottom: rhythm(1) }}>
          <Col col={12} lg={9}>
            <p>
              의 특징인 초지향성을 활용해 ‘사운드 스팟’을 구성하고, 필름형
              스피커의 얇고 가벼운 장점을 이용해 새로운 포지션의 ‘가정용
              초지향성 스피커’ 제안하고자 합니다.
            </p>
          </Col>
        </Row>
        <Row>
          <Col col={12} lg={9}>
            <p>
              Using advantage of the directionality, which is characteristic of
              sound signage speaker, We suggest ‘Sound spot’ and use thin and
              light advantages of film speaker to propose a directional speaker
              of the new position using in home.
            </p>
          </Col>
        </Row>
      </SectionWrap>
      <ImageWrap style={{ marginBottom: rhythm(4) }}>
        <img src={`${process.env.GATSBY_FILE_SERVER}/min-1.jpg`} alt="" />
      </ImageWrap>
    </>
  );
};

export default SolutionFunctionSection;
