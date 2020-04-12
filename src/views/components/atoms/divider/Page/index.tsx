import React from 'react';
import styled from 'styled-components';
import { rhythm } from '@style/typography';

const StyleDiv = styled.div`
  padding-top: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};
  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 1px;
    background-color: #000;
  }
`;

const PageDivider = () => <StyleDiv />;

export default PageDivider;
