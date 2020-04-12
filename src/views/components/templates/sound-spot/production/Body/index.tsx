import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// Components
import { rhythm } from '@style/typography';
import SectionWrap from '@atom/wrap/project/Section';
import SectiontTitleText from '@atom/text/title/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';

const StyledSectionWrap = styled(SectionWrap)`
  position: absolute;
  top: 0;
  color: ${({ theme }) => theme.color.styleguid['$slate']};
`;
const Size = styled.img`
  visibility: hidden;
`;
const SloganTitle = styled(SectiontTitleText)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.styleguid['$slate']};
  margin-bottom: ${rhythm(1)};
`;
const StyledWrap = styled(Container)`
  position: relative;
`;

const SoundspotBody = () => {
  return (
    <>
      <StyledWrap>
        <img
          src="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/자산-15-min.png"
          alt=""
        />
        <StyledSectionWrap>
          <SectionTitleRow>
            <Col col>
              <SectiontTitleText>Sound spot</SectiontTitleText>
            </Col>
          </SectionTitleRow>
          <Row>
            <Col col={12}>
              <SloganTitle>
                ‘ Sound signage film directional speaker ’
              </SloganTitle>
            </Col>
          </Row>
          <Row>
            <Col col>
              <p>A new way of directional speaker using in home.</p>
            </Col>
          </Row>
        </StyledSectionWrap>
      </StyledWrap>
      <SectionWrap>
        <SectionTitleRow>
          <Col col>
            <SectiontTitleText>[1] Speaker body</SectiontTitleText>
          </Col>
        </SectionTitleRow>
        <Row>
          <Col col>
            <SloganTitle>‘ Basic and stable design ’</SloganTitle>
          </Col>
        </Row>
        <Row>
          <Col col={8}>
            <p>
              안정적인 스탠드 구조를 위한 파이프라인과 가볍고 심플한 디자인을
              지향하여, 실내 어느 거실 인테리어에도 부담없이 배치 할 수
              있습니다.
            </p>
          </Col>
        </Row>
        <Row>
          <Col col={8}>
            <p>
              Through pipe line for stable stand structure and light and simple
              design, User can position it to everywhere in livingroom.
            </p>
          </Col>
        </Row>
      </SectionWrap>
    </>
  );
};

export default SoundspotBody;
