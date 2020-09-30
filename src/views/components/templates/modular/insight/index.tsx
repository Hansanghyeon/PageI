import React from 'react';
import { Container, Row } from 'styled-bootstrap-grid';

import {
  SectiontTitleWrap,
  SectiontTitleText,
  Type,
  Empty,
  Title,
  Text,
  Col,
} from '../index.style';

const InsightSection = () => {
  return (
    <Container>
      <Row>
        <Col.default col>
          <SectiontTitleWrap>
            <SectiontTitleText>INSIGHT</SectiontTitleText>
            <Type>_PROBLEM & SOLUTION</Type>
          </SectiontTitleWrap>
        </Col.default>
      </Row>
      <Row>
        <Col.default col>
          <img
            src={`${process.env.FILE_SERVER}/layer-3.jpg`}
            alt=""
            style={{ borderRadius: '4px' }}
          />
        </Col.default>
      </Row>
      <Empty />
      <Row>
        <Col.default col={12} md={7}>
          <Title.main>
            [ 01. <span className="point">외부 작업 환경</span>의 실태 ]
          </Title.main>
          <p>
            대부분 인력 중심으로 진행되는 야외 현장 근무 환경 역시 이러한 효율적
            작업 환경 구성은 더욱 더 중요한 요소로써 작용한다.하지만 작업 간에
            발생하는 미세먼지와 분진 그리고 잔해 및 파편과 같이 작업 능률을
            저해하는 요소가 지속적으로 발생하는 실외 환경의 특성상 이와같은 작업
            환경 구성하기란 쉽지않다.
          </p>
        </Col.default>
        <Col.SmallGrid col={12} md={5}>
          <img
            src={`${process.env.FILE_SERVER}/smart_factory-005.png`}
            alt=""
          />
          <Text.small style={{ textAlign: 'center' }}>
            [ 야외 현장 근무 환경의 부정적 요소 ]
          </Text.small>
        </Col.SmallGrid>
      </Row>
      <Empty />
      <Row>
        <Col.default col={12} md={7}>
          <Title.main>
            [ 02. <span className="point">IoT와 5G 그리고 AR</span> ]
          </Title.main>
          <p>
            현재 실외 근로자를 타겟으로 한 스마트 안전장비가 다수 상용화
            되어있으나, 대부분 지나친 무게와 크기 그리고 복잡한 구조와
            사용성으로 인해 열악한 실외 근무 현장 내에서 사용하기엔 적합하지
            않은 실정이다.
          </p>
          <p>
            따라서 본 프로젝트를 통해 기존 스마트 안전 장비가 가진문제점을
            합리적으로 개선하고, 현 스마트 팩토리의 핵심 요소를 활용하여 야외
            근로자에게 보다 개선된 작업 환경을 제공 할 수 있는 새로운 가치를
            제시해야한다.
          </p>
        </Col.default>
        <Col.SmallGrid col={12} md={5}>
          <img
            src={`${process.env.FILE_SERVER}/smart_factory-006.png`}
            alt=""
          />
          <Text.small style={{ textAlign: 'center' }}>
            [ 기존 스마트 고글의 문제점 ]
          </Text.small>
        </Col.SmallGrid>
      </Row>
    </Container>
  );
};

export default InsightSection;
