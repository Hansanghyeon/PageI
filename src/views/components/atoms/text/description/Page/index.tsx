import styled from 'styled-components';
// Utils
import { respondTo } from '@style/_respondTo';
import { rhythm } from '@style/typography';

const PageDescriptionText = styled.span`
  font-size: ${rhythm(0.55)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  color: ${({ theme }) => theme.color.styleguid['$slate']};
  ${respondTo.md`
    font-size: ${rhythm(0.8)};
  `}
`;

export default PageDescriptionText;
