import React from 'react';
import { createGlobalStyle } from 'styled-components';

import IntroSection from '@template/modular/intro';
import BackgroundSection from '@template/modular/background';
import InsightSection from '@template/modular/insight';
import ConceptSection from '@template/modular/concept';
import ConclusionSection from '@template/modular/conclusion';
import ProductSection from '@template/modular/product';

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
    <InsightSection />
    <ConceptSection />
    <ConclusionSection />
    <ProductSection />
  </>
);

export default Modular;
