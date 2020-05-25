import React from 'react';
import { Container, Row } from 'styled-bootstrap-grid';

import {
  SectiontTitleWrap,
  SectiontTitleText,
  Type,
  Col,
  Empty,
} from '../index.style';

const ConclusionSection = () => {
  return (
    <Container>
      <Row>
        <Col.default col>
          <SectiontTitleWrap>
            <SectiontTitleText>CONCLUSION</SectiontTitleText>
            <Type>_SOLUTION PROPOSAL</Type>
          </SectiontTitleWrap>
        </Col.default>
      </Row>
      <Empty />
    </Container>
  );
};

export default ConclusionSection;
