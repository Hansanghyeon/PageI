import React from 'react';
import SEO from '@view/components/seo';
// Components
import MainLayout from '@view/components/layouts/Main';
import GallerySection from '@template/GallerySection';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <MainLayout>
      <GallerySection />
    </MainLayout>
  </>
);

export default IndexPage;
