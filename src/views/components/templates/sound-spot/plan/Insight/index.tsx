import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
// Utils
import { rhythm } from '@style/typography';
// Components
import SectionWrap from '@atom/wrap/project/Section';
import SectiontTitleText from '@atom/text/title/Section';
import ColTitle from '@atom/text/title/Col';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';
import Interaction from './interaction';

const InsightSectionWrap = styled.div`
  background-color: #dbdbdb;
`;
const InteractionRow = styled(Row)`
  margin-bottom: ${rhythm(1)};
`;

const InsightSection = () => {
  return (
    <InsightSectionWrap>
      <SectionWrap>
        <InteractionRow>
          <Col col>
            <Interaction />
          </Col>
        </InteractionRow>
        <SectionTitleRow>
          <Col col>
            <SectiontTitleText>[2] Insight</SectiontTitleText>
          </Col>
        </SectionTitleRow>
        <Row>
          <Col col={12} lg={9}>
            <ColTitle>' 소리의 이동경로 변경과 도달범위 제한 '</ColTitle>
            <p>
              소리의 이동경로 및 도달범위를 제한하여, TV 앞으로 다가가는
              아이들의 습관을 개선시키고 불필요한 공간에 소음이 발생하는 것을
              방지할 수 있습니다.
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col col={12} lg={9}>
            <ColTitle>
              ' Change a moving route of TV sound and limit area of reach. '
            </ColTitle>
            <p>
              Through these way, It can improve children's bad habit to approach
              to front of TV and prevent to occur noise in unnecessary space
              where don't need to can hear TV sound.
            </p>
          </Col>
        </Row>
      </SectionWrap>
    </InsightSectionWrap>
  );
};

export default InsightSection;
