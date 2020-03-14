import React from 'react';
import { Link } from 'gatsby';
import ReactFullpage from '@fullpage/react-fullpage';

import SEO from '@view/components/seo';
import GallerySection from '@template/GallerySection';
import BioSection from '@template/BioSection';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ReactFullpage
      licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE_KEY}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }: any) => {
        return (
          <ReactFullpage.Wrapper>
            <GallerySection />
            <BioSection />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default IndexPage;
