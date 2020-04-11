import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
// Components
import ImageWrap from '@atom/wrap/Image';
import SectionWrap from '@atom/wrap/Section';
import SectiontTitleText from '@atom/text/title/Section';
import PageDivider from '@atom/divider/Page';
import ColTitle from '@atom/text/title/Col';

const ProblemSection = () => (
  <>
    <ImageWrap>
      <img src="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/연출이미지-1-min.png" />
    </ImageWrap>
    <SectionWrap>
      <Row>
        <Col col>
          <SectiontTitleText>[1] Problem</SectiontTitleText>
        </Col>
      </Row>
      <Row>
        <Col col>
          <ColTitle>
            ' 아이들의 나쁜 TV시청 습관과 TV 소음으로 인한 벽/층간 소음 '
          </ColTitle>
          <p>
            예&#41; 가까운 거리에서 TV를 시청하는 어린이, 수험생 자녀를 둔 가정,
            야간 TV 시청 또는 벽/층간 소음 등.
          </p>
          <PageDivider />
          <ColTitle>
            ' Children's bad viewing habits and TV noise from in and out of the
            house. '
          </ColTitle>
          <p>
            Ex&#41; Children watching TV at close distance, families with
            test-takers' children, night-time TV viewing or floor/wall noise,
            etc.
          </p>
        </Col>
      </Row>
    </SectionWrap>
  </>
);
export default ProblemSection;
