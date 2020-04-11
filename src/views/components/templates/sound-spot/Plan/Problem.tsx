import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
// Components
import ImageWrap from '@atom/wrap/Image';
import SectionWrap from '@atom/wrap/Section';
import SectiontTitleText from '@atom/text/title/Section';

const ProblemSection = () => (
  <>
    <ImageWrap>
      <img src="https://source.unsplash.com/collection/9641990/1600x900" />
    </ImageWrap>
    <SectionWrap>
      <Row>
        <Col col>
          <SectiontTitleText>[1] Problem</SectiontTitleText>
        </Col>
      </Row>
      <Row>
        <Col col>test</Col>
      </Row>
    </SectionWrap>
  </>
);
export default ProblemSection;
