import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
// Components
import SectionWrap from '@atom/wrap/project/Section';
import SectiontTitleText from '@atom/text/title/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';
import { rhythm } from '@style/typography';

const MotiveSectionWrap = styled.div`
  background-image: url(https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/연출-이미지-2-min.png);
  height: 100vh;
  min-height: 812px;
  background-size: cover;
  background-position: center;
  ${SectionWrap} {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    b {
      color: ${({ theme }) => theme.color.bg[0]};
    }
  }
  ${SectiontTitleText} {
    color: ${({ theme }) => theme.project.soundSpot['$white']};
    span {
      color: ${({ theme }) => theme.project.soundSpot['$denim']};
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }
`;

const MotiveSection = () => (
  <MotiveSectionWrap>
    <SectionWrap>
      <SectionTitleRow>
        <Col col>
          <SectiontTitleText>
            [3] Motive <span>[ Spotlight ]</span>
          </SectiontTitleText>
        </Col>
      </SectionTitleRow>
      <Row style={{ marginBottom: rhythm(1) }}>
        <Col col>
          <p>
            ‘ <b>특정 공간만을 비추는 스포트 라이트</b> 빛의 지향성과 범위성에서
            모티브를 얻었습니다. ’
          </p>
        </Col>
      </Row>
      <Row>
        <Col col>
          <p>
            ‘ It was motivated from directionality and scopeability of{' '}
            <b>spot light shining to specific space.</b> ’
          </p>
        </Col>
      </Row>
    </SectionWrap>
  </MotiveSectionWrap>
);

export default MotiveSection;
