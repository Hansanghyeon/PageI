import styled from 'styled-components';
import { Container, Col } from 'styled-bootstrap-grid';
import { rhythm } from '@style/typography';

const SectionWrap = styled(Container)`
  /* section base style */
  font-size: 14px;
  color: ${({ theme }) => theme.color.styleguid['$blue-grey-two']};
  padding-top: ${rhythm(5.5)};
  padding-bottom: ${rhythm(5.5)};
  ${Col} {
    p:last-child {
      margin-bottom: 0;
    }
  }
`;

export default SectionWrap;
