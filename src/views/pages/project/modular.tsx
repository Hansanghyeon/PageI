import React from 'react';
import { createGlobalStyle } from 'styled-components';

import IntroSection from '@template/modular/intro';
import BackgroundSection from '@template/modular/background';

const GlobalStyle = createGlobalStyle`
  body {
    --bg: ${({ theme }) => theme.project.modular.$bg};
    --textColor: ${({ theme }) => theme.project.modular.$color};
    background-color: var(--bg);
    color: var(--textColor);
    *, p {
      font-size: 14px;
    }
  }
  .tl-edges {
    overflow: hidden;
  }
`;
const Modular = () => (
  <>
    <GlobalStyle />
    <IntroSection />
    <BackgroundSection />
  </>
);

export default Modular;
