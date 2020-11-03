import React from 'react';
import { Container, Row, Col, BgImgRow } from './style';
import ColTitle from '@atom/text/title/Col';
import SectiontTitleText from '@atom/text/title/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';

const InsightSection = () => {
  return (
    <>
      <BgImgRow>
        <Container>
          <Row>
            <Col col>
              <img
                src={`${process.env.FILE_SERVER}/insight.png`}
                srcSet={`${process.env.FILE_SERVER}/insight@2x.png 2x, ${process.env.FILE_SERVER}/problem-1@3x.png 3x`}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <SectionTitleRow>
            <Col col>
              <SectiontTitleText>[3] Insight</SectiontTitleText>
            </Col>
          </SectionTitleRow>
          <Row>
            <Col col>
              <ColTitle>
                ' 잘못된 자세를 인지시켜 올바른 자세를 유지토록 하는 것 '
              </ColTitle>
              <p>
                거리와 압력센서에 기반한 장비와 어플리케이션 알림을 통해
                사용자가 잘못된 자세를 인지하고 올바른 자세를 지속적으로 유지할
                수 있도록 가이드한다.
              </p>
            </Col>
          </Row>
        </Container>
      </BgImgRow>
    </>
  );
};

export default InsightSection;
