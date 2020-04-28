import styled from 'styled-components';

const SectionTitleText = styled.span`
  font-size: 24px;
  font-weight: bold;
  line-height: 2.42;
  color: ${({ theme }) => theme.project.soundSpot['$slate']};
`;

export default SectionTitleText;
