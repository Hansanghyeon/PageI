import React from 'react';
// Components
import IntroSection from '@template/butterfleye/intro';
import Shot from '@template/butterfleye/shot';
import MainLayout from '@view/components/layouts/Main';

const Butterfleye = () => (
  <>
    <IntroSection />
    <MainLayout>
      <Shot />
    </MainLayout>
  </>
);

export default Butterfleye;
