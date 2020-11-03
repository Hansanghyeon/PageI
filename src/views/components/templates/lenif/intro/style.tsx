import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import SectionWrap from '@atom/wrap/project/Section';
import { rhythm } from '@style/typography';

export const HeroImgWrap = styled.div`
  height: 100vh;
  min-height: 56%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${process.env.FILE_SERVER}/main_image.png);
  background-size: cover;
  background-position: center;
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

export const IframeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
