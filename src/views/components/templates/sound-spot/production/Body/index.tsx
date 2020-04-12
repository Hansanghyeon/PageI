import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// Components
import { rhythm } from '@style/typography';
import ImageWrap from '@atom/wrap/Image';
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
  img {
    transform: scale(1.2);
  }
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
    </>
  );
};

export default SoundspotBody;
