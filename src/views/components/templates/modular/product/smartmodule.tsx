import React from 'react';
import { Row } from 'styled-bootstrap-grid';

import { Col, Title, Span, Empty, Img } from '../index.style';

type props = {
  imgSrc: string;
  number: number;
  title: string;
  children: React.ReactNode;
};
const SmartModule: React.FC<props> = ({
  imgSrc,
  number,
  title,
  children,
}: props) => (
  <>
    <Row>
      <Col.default col={12} md={7}>
        <img
          src={`${process.env.FILE_SERVER}/${imgSrc}`}
          alt=""
          style={{ marginBottom: 0 }}
        />
      </Col.default>
      <Col.between col={12} md={5}>
        <div>
          <span>SMART MODULE {number}.</span>
          <Title.point>{title}</Title.point>
        </div>
        <p>{children}</p>
      </Col.between>
    </Row>
  </>
);

const SmartModules = {
  SMART_MODULE: () => (
    <>
      <SmartModule imgSrc="conclusion-module-001.jpg" number={1} title="CAMERA">
        <Span>타 근로자 또는 현장 관리자 간의 작업현황 및 정보를</Span>
        <Span>
          시각적으로 공유할 수 있는 소형 카메라 모듈을 통해, 현장 근로자는
        </Span>
        <Span>보다 더 효율적인 의사소통이 가능하다.</Span>
      </SmartModule>
      <Empty />
      <SmartModule
        imgSrc="conclusion-module-002.jpg"
        number={2}
        title="BEAM PROJECTOR"
      >
        <Span>작업 현황을 전달할 수 있는 소형 카메라 모듈과 함께,</Span>
        <Span>
          소형 빔 프로젝터는 타 근로자 또는 관리자가 전달한 관련 정보를
        </Span>
        <Span>직관적으로 인지 할 수 있도록 도와준다.</Span>
      </SmartModule>
      <Empty />
      <SmartModule
        imgSrc="conclusion-module-003.jpg"
        number={3}
        title="LED LITE"
      >
        <Span>충전식 LED 모듈은 실외 현장 근무의 주된 작업공간 중 하나인</Span>
        <Span>터널 그리고 지하도와 같은 어두운 작업 현장 내에서도</Span>
        <Span>근로자에게 보다 원활한 작업환경을 제공한다.</Span>
      </SmartModule>
      <Empty />
      <SmartModule
        imgSrc="conclusion-module-004.jpg"
        number={4}
        title="BLUETOOTH EARPHONE"
      >
        <Span>카메라 그리고 LED 모듈이 가지고 있는 기본 요소 중 하나인</Span>
        <Span>골전도 이어폰 기능은 모듈 부착 시 맞닿게 되는 골전도 연결</Span>
        <Span>파트와 결합되어 작동하게 된다.</Span>
      </SmartModule>
    </>
  ),
  MODULE_STRUCTURE: () => (
    <>
      <SmartModule
        imgSrc="conclusion-structure-001.jpg"
        number={1}
        title="BAND & BUCKLE"
      >
        <Span>분리버튼을 누르면 근로자는 작업 간에 땀과 분진으로 인해</Span>
        <Span>손상되거나 더러워진 밴드와 버클을 보다 손쉽게 분리하여</Span>
        <Span>교체 할 수 있다.</Span>
      </SmartModule>
      <Empty />
      <SmartModule
        imgSrc="conclusion-structure-002.jpg"
        number={2}
        title="FRONT PART"
      >
        <Span>전면부 교체 버튼을 눌러 작업간에 손상된 해당 파츠를 분리한</Span>
        <Span>뒤 교체하거나 현장 내 부여된 근로자의 역할에 따라</Span>
        <Span>다른 컬러 파츠로 교체 할 수 있다.</Span>
      </SmartModule>
      <Empty />
    </>
  ),
  USING_IMAGES: () => (
    <div style={{ lineHeight: 0 }}>
      <Img
        src={`${process.env.FILE_SERVER}/conclusion-structoure-001.jpg`}
        alt=""
        style={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      />
      <Img
        src={`${process.env.FILE_SERVER}/conclusion-structoure-002.jpg`}
        alt=""
      />
      <Img
        src={`${process.env.FILE_SERVER}/conclusion-structoure-003.jpg`}
        alt=""
      />
      <Img
        src={`${process.env.FILE_SERVER}/conclusion-structoure-004-1.jpg`}
        alt=""
        style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
      />
    </div>
  ),
};

export default SmartModules;
