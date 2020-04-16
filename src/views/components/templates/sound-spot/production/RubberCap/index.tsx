import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
// Utils
import { rhythm } from '@style/typography';
// Components
import SectionWrap from '@atom/wrap/project/Section';
import SectiontTitleText from '@atom/text/title/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';
import SloganTitle from '@atom/text/title/Slogan';

const SoundspotRubberCap = () => (
  <SectionWrap>
    <SectionTitleRow>
      <Col col>
        <SectiontTitleText>[4] Rubber cap </SectiontTitleText>
      </Col>
    </SectionTitleRow>
    <Row style={{ marginBottom: rhythm(1) }}>
      <Col col>
        <SloganTitle>
          ‘ For prevention of scratch of living room floor ’
        </SloganTitle>
      </Col>
    </Row>
    <Row style={{ marginBottom: rhythm(1) }}>
      <Col col={12} lg={9}>
        <p>
          제품 하단부에 위치한 4방면의 고무 캡은 거실바닥의 긁힘 손상을
          방지함으로써, 사용자는 사운드 스팟을 보다 부담없이 이동시킬 수
          있습니다.
        </p>
      </Col>
    </Row>
    <Row>
      <Col col={12} lg={9}>
        <p>
          Rubber cap positioned under the sound spot can prevent scratch of
          living room’s floor and through it, User can move it easily.
        </p>
      </Col>
    </Row>
  </SectionWrap>
);

export default SoundspotRubberCap;
