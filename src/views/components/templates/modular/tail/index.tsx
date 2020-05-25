import React from 'react';
import { Row } from 'styled-bootstrap-grid';

import { Col, Empty, Container, Title, Text } from '../index.style';

const TailSection = () => {
  return (
    <Container.dark fluid>
      <Container.default>
        <Empty />
        <Empty />
        <Empty />
        <Row>
          <Col.default col style={{ textAlign: 'center' }}>
            <Title.tail>MODULAR</Title.tail>
            <Text.tail>Designed by Kihyeon Kim</Text.tail>
            <Empty />
            <Empty />
            <Empty />
            Thank you!
            <Empty />
            <Empty />
          </Col.default>
        </Row>
      </Container.default>
    </Container.dark>
  );
};

export default TailSection;
