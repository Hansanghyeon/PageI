import styled from 'styled-components';
// Utils
import { respondTo } from '@style/_respondTo';
import { rhythm } from '@style/typography';

const PageTitleText = styled.span`
  font-size: ${rhythm(1)};
  font-weight: 500;
  letter-spacing: 3.6px;
  line-height: 1;
  color: ${({ theme }) => theme.color.styleguid['$denim']};
  ${respondTo.md`
    font-size: ${rhythm(1.5)};
  `};
`;

export default PageTitleText;
