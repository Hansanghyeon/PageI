import styled from 'styled-components';
// Utils
import { media } from 'styled-bootstrap-grid';
import { rhythm } from '@style/typography';

type ThemeColorValueProps = {
  project: string;
  value: string;
};
export interface ColorProps {
  color: any;
}
const PageTitleText = styled.span<ColorProps>`
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
