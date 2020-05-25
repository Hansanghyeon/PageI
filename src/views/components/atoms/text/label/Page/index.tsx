import styled from 'styled-components';

type color = {
  color: {
    project: string;
    value: string;
  };
};
const PageLabelText = styled.span<color>`
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.05px;
  color: ${({ theme, color }) => theme.project[color.project][color.value]};
  line-height: 1;
`;

export default PageLabelText;
