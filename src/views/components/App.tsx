import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export default () => {
  return (
    <ReactFullpage
      licenseKey={process.env.REACT_APP_FULLPAGE_LICENSEKEY}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }: any) => (
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
      )}
    />
  );
};
