import styled from 'styled-components';
// utils
import { rhythm } from '@style/typography';

const SloganTitle = styled.span`
  font-size: 19px;
  font-weight: bold;
  line-height: 2.42;
  color: ${({ theme }) => theme.color.styleguid['$slate']};
  margin-bottom: ${rhythm(1)};
`;

export default SloganTitle;
