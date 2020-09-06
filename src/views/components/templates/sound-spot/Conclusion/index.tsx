import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
// Utils
import { rhythm } from '@style/typography';
// Components
import SectionWrap from '@atom/wrap/project/Section';

const ConclusionSectionWrap = styled(SectionWrap)`
  text-align: center;
  p,
  b {
    color: ${({ theme }) => theme.project.soundSpot['$slate']};
    font-weight: bold;
  }
  b {
    font-size: 1rem;
  }
`;

const SoundspotConclusion = () => (
  <>
    <Container fluid>
      <Row>
        <Col col noGutter>
          <img src={`${process.env.GATSBY_FILE_SERVER}/-14-min-1.png`} alt="" />
        </Col>
      </Row>
    </Container>
    <ConclusionSectionWrap>
      <Row>
        <Col col>
          <p>‘ 더 나은 TV 시청 환경을 경험하길 원하는 모든 사용자를 위해 ’</p>
          <p>
            ‘ For every person who want to experience a better environment of
            watching TV ’
          </p>
        </Col>
      </Row>
      <div style={{ marginBottom: rhythm(10) }} />
      <Row>
        <Col col>
          <b>Thank you!</b>
          <br />
          <br />
          <br />
        </Col>
      </Row>
      <Row>
        <Col col>
          <span>2020 Team project / Sound spot</span>
          <br />
          <br />
          <span> Designed by Kihyeon Kim / Hyomin Lee / Seongmin Kwon</span>
        </Col>
      </Row>
    </ConclusionSectionWrap>
  </>
);

export default SoundspotConclusion;
