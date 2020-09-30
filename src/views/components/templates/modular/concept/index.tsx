import React from 'react';
import { Container } from 'styled-bootstrap-grid';

import {
  SectiontTitleWrap,
  SectiontTitleText,
  Type,
  Empty,
  Title,
  Text,
  Col,
  Row,
  ImageWrap,
} from '../index.style';

const ConceptSection = () => {
  return (
    <Container>
      <Row>
        <ImageWrap>
          <img
            src={`${process.env.FILE_SERVER}/modulegoggle-concept_start.png`}
            style={{ width: '100%', marginBottom: 0 }}
          />
        </ImageWrap>
      </Row>
      <Row.bg>
        <Col.default col>
          <SectiontTitleWrap>
            <SectiontTitleText dark>CONCEPT</SectiontTitleText>
            <Type>_VISUALIZATION DATA</Type>
          </SectiontTitleWrap>
        </Col.default>
      </Row.bg>
      <Row.bg>
        <Empty />
        <Col.default col={12} md={6}>
          <Title.main>
            [ 01. 실외 현장 근로자를 위한{' '}
            <span className="point">스마트 고글</span> ]
          </Title.main>
          <p>
            야외 현장 내 근로자 간의 정확한 의사소통 그리고 빠른 인지와 명확한
            판단은 이러한 효율적 작업 환경을 구성함에 있어 가장 필수적인 요소라
            할 수 있다.
          </p>
          <p>
            따라서, 기존 실내 스마트 팩토리의 핵심적인 관련 기능을 야외 현장
            근로자가 외부 환경요인에 구애 받지 않고 보다 효율적으로 사용 할 수
            있도록 구성된 스마트 안전 장비를 본 프로젝트를 통해 제시하고자 한다.
          </p>
        </Col.default>
        <Col.SmallGrid col={12} md={6}>
          <img src={`${process.env.FILE_SERVER}/concept-001.png`} alt="" />
          <Text.small style={{ textAlign: 'center' }}>
            [ 야외 현장 근로자를 위한 기능 요소 ]
          </Text.small>
        </Col.SmallGrid>
      </Row.bg>
      <Row.bg>
        <Col.default col>
          <Title.main>
            [ 02. 디자인 프로세스를 통한{' '}
            <span className="point">형태 연구</span> ]
          </Title.main>
          <p>
            기존 스마트 고글이 가지고 있는 ‘무겁다’ , ‘복잡하다’ 그리고
            ‘구조적이다 라는 느낌에서 벗어나 보다 심플하고 컴팩트한 디자인으로
            전개하였다.
          </p>
        </Col.default>
      </Row.bg>
      <Row.bg>
        <div>
          <img src={`${process.env.FILE_SERVER}/concept-002.png`} />
        </div>
        <div>
          <img
            src={`${process.env.FILE_SERVER}/blueprint.png`}
            style={{ marginBottom: '1rem' }}
          />
        </div>
      </Row.bg>
      <Row.bg>
        <Col.default col={12} md={6}>
          <Title.main>
            [ 03. 사용성 경험을 위한 <span className="point">스터디 목업</span>{' '}
            ]
          </Title.main>
          <p>
            스케치 결과물에 대한 형태와 사용성을 보다 더 직관적으로 판단하기
            위해, 최종 형태를 도면화한 블루프린트를 기반으로 스터디 목업을
            진행하였다.
          </p>
          <p>
            해당 과정을 통해 제품을 사용하는 사용자의 입장에서 실제 제품을
            착용했을 때의 모습 뿐만아니라 착용감과 비례 그리고 형태에 대한
            전반적인 분위기를 조금더 객관적인 관점에서 경험할 수 있었다.
          </p>
        </Col.default>
        <Col.SmallGrid col={12} md={6}>
          <img
            src={`${process.env.FILE_SERVER}/concept-plus-img-001.jpeg`}
            alt=""
          />
        </Col.SmallGrid>
      </Row.bg>
      <Row style={{ marginBottom: '140px' }}>
        <ImageWrap>
          <img
            src={`${process.env.FILE_SERVER}/modulegoggle-concept_end.png`}
            style={{ width: '100%' }}
          />
        </ImageWrap>
      </Row>
    </Container>
  );
};

export default ConceptSection;
