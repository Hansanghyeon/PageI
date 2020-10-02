import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { rhythm } from '@style/typography';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import SectionWrap from '@atom/wrap/project/Section';

export const HeroImgWrap = styled.div`
  height: 100vh;
  min-height: 56%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapRoot = styled(SectionWrap)`
  font-size: ${rhythm(1 / 3)};
  ${media.md`
    font-size: ${rhythm(1 / 2)};
  `};
`;

export const BodyRow = styled(Row)`
  margin-bottom: ${rhythm(2)};
  ${media.md`
    margin-bottom: ${rhythm(4)};
  `};
  p {
    span {
      ${media.md`
        display: block;
      `};
    }
  }
`;
