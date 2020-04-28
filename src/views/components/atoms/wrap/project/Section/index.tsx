import styled from 'styled-components';
import { Container, Col } from 'styled-bootstrap-grid';
// Utils
import { rhythm } from '@style/typography';
import { respondTo } from '@style/_respondTo';

const SectionWrap = styled(Container)`
  /* section base style */
  font-size: 14px;
  color: ${({ theme }) => theme.project.soundSpot['$blue-grey-two']};
  padding-top: ${rhythm(2)};
  padding-bottom: ${rhythm(2)};
  ${respondTo.lg`
    padding-top: ${rhythm(4)};
    padding-bottom: ${rhythm(4)};
  `};
  ${Col} {
    p:last-child {
      margin-bottom: 0;
    }
  }
`;

export default SectionWrap;
