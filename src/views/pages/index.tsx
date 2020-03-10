import React from 'react';
import { Link } from 'gatsby';
import ReactFullpage from '@fullpage/react-fullpage';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ReactFullpage
      licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE_KEY}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }: any) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default IndexPage;
