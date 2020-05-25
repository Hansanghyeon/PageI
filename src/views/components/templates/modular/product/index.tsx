import React from 'react';
import { Row } from 'styled-bootstrap-grid';

import {
  SectiontTitleWrap,
  SectiontTitleText,
  Col,
  Empty,
  Container,
  Text,
  ListItem,
} from '../index.style';
import * as ProductShot from './shot';
import SmartModules from './smartmodule';

const ProductSection = () => {
  return (
    <Container.dark fluid>
      <Empty />
      <Container.default>
        <Row>
          <Col.default col>
            <SectiontTitleWrap>
              <SectiontTitleText dark>PRODUCT DETAIL</SectiontTitleText>
            </SectiontTitleWrap>
          </Col.default>
        </Row>

        <Row>
          <Col.default col={12} md={6}>
            <ListItem.default>
              <Text.round>
                <i>1</i>
              </Text.round>
              <Text.point>SMART GOGGLE</Text.point>
            </ListItem.default>
          </Col.default>
          <Col.default col={12} md={6}>
            <p>
              야외 근로자간의 원활한 의사소통을 위한 소형 빔프로젝터와 모듈
              카메라 그리고 골전도 이어폰 기능을 적용하여, 기존 스마트 안전
              고글과 차별화 된 작업 효율성을 강조하였다. 안전 장비가 가진
              딱딱하고 기능 중심적인 형태에서 벗어나 자연스러운 곡선 라인을
              활용하여 좀 더 부드럽고 안정감 있는 형태로 디자인하였다.
            </p>
          </Col.default>
        </Row>
        <Empty />
        <ProductShot.one />
        <Empty />

        <Row>
          <Col.default col={12} md={6}>
            <ListItem.default>
              <Text.round>
                <i>2</i>
              </Text.round>
              <Text.point>CHARGING CASE</Text.point>
            </ListItem.default>
          </Col.default>
          <Col.default col={12} md={6}>
            <p>
              통신 카메라와 골전도 이어폰 그리고 LED와 소형 빔프로젝터를 보관 할
              수 있는 휴대용 충전 케이스를 통해, 기존 스마트 고글의 비효율적인
              디지털 장비의 사용 방법는 달리 보다 더 편리한 휴대가 가능하다.
            </p>
          </Col.default>
        </Row>
        <Empty />
        <ProductShot.two />
        <Empty />

        <Row>
          <Col.default col={12} md={6}>
            <ListItem.default>
              <Text.round>
                <i>3</i>
              </Text.round>
              <Text.point>SMART MODULE</Text.point>
            </ListItem.default>
          </Col.default>
          <Col.default col={12} md={6}>
            <p>
              기존의 무겁고 복잡한 사용성을 가진 스마트 안전장비와는 다르게,
              합리적인 결합 구조와 사용성을 기반으로 디자인된 스마트 모듈
              장비이다. 휴대용 모듈 카메라와 LED 그리고 소형 빔프로젝터는 야외
              현장 근로자에게 보다 개선된 근무환경과 사용성을 제공한다.
            </p>
          </Col.default>
          <Empty />
        </Row>
        <SmartModules.SMART_MODULE />
        <Empty />
        <Empty />
        <Row>
          <Col.default col={12} md={6}>
            <ListItem.default>
              <Text.round>
                <i>4</i>
              </Text.round>
              <Text.point>MODULE STRUCTURE</Text.point>
            </ListItem.default>
          </Col.default>
          <Col.default col={12} md={6}>
            <p>
              미세먼지와 파편 그리고 근로자의 땀 으로 인해 손상된 안전 고글의
              위생과 내구도를 항상 최상의 상태로 유지할 수 있도록 필요에 따라
              손상된 파트를 손쉽게 교체 할 수 있도록 디자인 하였다.
            </p>
          </Col.default>
          <Empty />
        </Row>
        <SmartModules.MODULE_STRUCTURE />
        <Empty />
        <Empty />
        <Row>
          <Col.default col>
            <ListItem.default>
              <Text.round>
                <i>5</i>
              </Text.round>
              <Text.point>USING IMAGES</Text.point>
            </ListItem.default>
          </Col.default>
          <Empty />
        </Row>
        <SmartModules.USING_IMAGES />
      </Container.default>
    </Container.dark>
  );
};

export default ProductSection;
