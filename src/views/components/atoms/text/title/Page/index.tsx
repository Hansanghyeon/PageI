import styled from 'styled-components';
// Utils
import { media } from 'styled-bootstrap-grid';
import { rhythm } from '@style/typography';

type color = {
  color: {
    project: string;
    value: string;
  };
};

const PageTitleText = styled.span<color>`
  font-size: ${rhythm(1)};
  font-weight: 500;
  letter-spacing: 3.6px;
  line-height: 1;
  color: ${({ theme, color }) => theme.project[color.project][color.value]};
  ${media.md`
    font-size: ${rhythm(1.5)};
  `};
`;

export default PageTitleText;
