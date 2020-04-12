import styled from 'styled-components';

const PageDescriptionText = styled.span`
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  color: ${({ theme }) => theme.color.styleguid['$slate']};
`;

export default PageDescriptionText;
