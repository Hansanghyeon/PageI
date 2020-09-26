import Head from 'next/head';
// Components
import GallerySection from '@template/GallerySection';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Kihyeon | Industrial designer</title>
      </Head>
      <GallerySection />
    </>
  );
};

export default IndexPage;
export async function getStaticProps() {
  return {
    props: {},
  };
}
