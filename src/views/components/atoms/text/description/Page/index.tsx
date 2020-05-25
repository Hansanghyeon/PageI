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
const PageDescriptionText = styled.span<color>`
  font-size: ${rhythm(0.55)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  color: ${({ theme, color }) => theme.project[color.project][color.value]};
  ${media.md`
    font-size: ${rhythm(0.8)};
  `}
`;

export default PageDescriptionText;
