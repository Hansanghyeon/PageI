import styled from 'styled-components';

const PageLabelText = styled.span`
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.05px;
  color: ${({ theme }) => theme.color.styleguid['$cool-grey']};
  line-height: 1;
`;

export default PageLabelText;
