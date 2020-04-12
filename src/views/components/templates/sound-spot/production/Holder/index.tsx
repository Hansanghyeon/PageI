import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
// Utils
import { rhythm } from '@style/typography';
// Components
import SectionWrap from '@atom/wrap/project/Section';
import SectiontTitleText from '@atom/text/title/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';
import SloganTitle from '@atom/text/title/Slogan';

const SoundspotHolder = () => (
  <SectionWrap>
    <SectionTitleRow>
      <Col col>
        <SectiontTitleText>[3] Magnetic wiring holder</SectiontTitleText>
      </Col>
    </SectionTitleRow>
    <Row style={{ marginBottom: rhythm(1) }}>
      <Col col>
        <SloganTitle>
          ‘ Simple and clear way for wiring arrangement ’
        </SloganTitle>
      </Col>
    </Row>
    <Row style={{ marginBottom: rhythm(1) }}>
      <Col col={12} lg={9}>
        <p>
          후면에 내장된 자석을 통해, 사용자는 상황에 따라 컨트롤러를 스피커
          몸체에 부착 및 분리하여 보다 손쉽게 사용 할 수 있습니다.
        </p>
      </Col>
    </Row>
    <Row>
      <Col col={12} lg={9}>
        <p>
          User can do remove or attach remote volume controller from pipe using
          magnetic located behind of controller.
        </p>
      </Col>
    </Row>
  </SectionWrap>
);

export default SoundspotHolder;
