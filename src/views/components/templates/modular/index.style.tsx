import styled from 'styled-components';
import { media, Col as _Col } from 'styled-bootstrap-grid';

import * as _SectiontTitleText from '@atom/text/title/Section';
import { rhythm } from '@style/typography';

export const SectiontTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-bottom: ${rhythm(1)};
`;
export const SectiontTitleText = styled(_SectiontTitleText.default)`
  color: ${({ theme }) => theme.project.modular.$main};
  letter-spacing: 0.2em;
  font-size: ${rhythm(1)};
  line-height: 1.4;
`;

export const Empty = styled.div`
  margin-bottom: ${rhythm(1.5)};
  ${media.md`
    margin-bottom: ${rhythm(3)};
  `}
`;

export const Title = {
  main: styled.div`
    color: ${({ theme }) => theme.project.modular.$main};
    font-size: 1.3em;
    margin-bottom: ${rhythm(1)};
    ${media.md`
      font-size: 1.5em;
      margin-bottom: ${rhythm(1.5)};
    `};
    .point {
      font-size: inherit;
      color: ${({ theme }) => theme.project.modular.$point};
    }
  `,
  post: styled.div`
    color: ${({ theme }) => theme.project.modular.$main};
    font-size: 1.3em;
  `,
};

export const Text = {
  small: styled.div`
    font-size: 0.9em;
    margin-bottom: 0.3em;
  `,
};

export const Col = {
  default: styled(_Col)``,
  SmallGrid: styled(_Col)`
    margin-bottom: ${rhythm(1.5)};
    img {
      margin-bottom: 0;
    }
  `,
};

export const Type = styled.span``;
