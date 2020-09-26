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

const BackgroundSection = () => {
  return (
    <Container>
      <Row>
        <Col.default col>
          <SectiontTitleWrap>
            <SectiontTitleText>BACKGROUND</SectiontTitleText>
            <Type>_RESEARCH DATA</Type>
          </SectiontTitleWrap>
        </Col.default>
      </Row>
      <Row>
        <Col.default col>
          <img src={`${process.env.FILE_SERVER}/layer-4-1.jpg`} alt="" />
        </Col.default>
      </Row>
      <Empty />
      <Row>
        <Col.default col={12} md={7} lg={6}>
          <Title.main>
            [ 01. <span className="point">스마트 팩토리</span> 시장의 증가]
          </Title.main>
          <p>
            현 산업 현장의 주 이슈는 바로 5G기술을 기반으로 한 스마트
            팩토리이다. 이러한 동향의 주된 이유는 IoT요소 뿐만 아니라 인공지능과
            스마트 머신 그리고 빅데이터와 AR&VR 과 같은 스마트 기술을 통해,
            과거의 인력 집약적 구조에서 벗어나 보다 효율적인 작업 환경을
            구성하고자 함에 있다.
          </p>
          <p>
            포스코경영연구원 &중소기업진흥청의 조사결과에 따르면, 이와 같은
            글로벌 스마트 팩토리 시장 규모는 2015년 1937억 달러를 기점으로
            지속적 성장을 거듭해 2020년 기점 2847억 달러 규모로 성장할 것을
            예상했다.
          </p>
        </Col.default>
        <Col.default col={12} md={5} lg={6}>
          <Row>
            <Col.SmallGrid col={12} lg={7}>
              <Title.post>[ 글로벌 스마트팩토리 시장 ]</Title.post>
              <Text.small>출처: 포스코경영연구원&중소기업진흥정</Text.small>
              <img
                src={`${process.env.FILE_SERVER}/smart_factory-002.png`}
                alt=""
              />
              <Text.small>단위: 억 달러</Text.small>
            </Col.SmallGrid>
            <Col.SmallGrid col={12} lg={5}>
              <Title.post>[ 스마트 팩토리 도입효과 ]</Title.post>
              <Text.small>출처: 민관합동스마트공장 추진단</Text.small>
              <img
                src={`${process.env.FILE_SERVER}/smart_factory-003.png`}
                alt=""
              />
              <Text.small>단위: 억 달러</Text.small>
            </Col.SmallGrid>
          </Row>
        </Col.default>
      </Row>
      <Empty />
      <Row>
        <Col.default col={12} md={6}>
          <Title.main>
            [ 02. <span className="point">IoT와 5G 그리고 AR</span> ]
          </Title.main>
          <p>
            ‘통신 인프라’와 ‘작업 효율성’은 스마트 팩토리의 핵심 중 가장 중요한
            가치라 할 수 있다. 이를 통해 작업 현장 내 기술과 설비 역할에 따라
            구분된 실내 근로자 간의 의사소통이 보다 원활히 이루어지고, 관련
            정보를 더욱 빠르게 인지하여 명확한 의사결정을 도출 할 수 있기
            때문이다.
          </p>
          <p>
            현 스마트 팩토리의 핵심 구성 요소 9가지 중, AR기술과 IoT 그리고 5G
            기술은 이처럼 효율적 작업 환경을 구성하기위한 가장 기초적 요소 라 할
            수 있다.
          </p>
        </Col.default>
        <Col.default col={12} md={6}>
          <Title.post>[ 스마트 팩토리의 9가지 구성요소 ]</Title.post>
          <Text.small>출처: 국가기술표준원 기술보고서 제78호</Text.small>
          <img
            src={`${process.env.FILE_SERVER}/smart_factory-004.png`}
            alt=""
          />
        </Col.default>
      </Row>
    </Container>
  );
};

export default BackgroundSection;
