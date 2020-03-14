import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow';

import SEO from '@view/components/seo';
import GallerySection from '@template/GallerySection';
import BioSection from '@template/BioSection';
import '@view/backup/Scss/fullpage.scss';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ReactFullpage
      licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE_KEY}
      scrollingSpeed={1000}
      navigation
      navigationPosition="pagei-sideNav-style1"
      navigationTooltips={[
        'Output',
        'About me',
        'Philosophy',
        'Contact',
        'Instagram',
      ]}
      dragAndMove
      scrollOverflow
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
