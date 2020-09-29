import Head from 'next/head';
// Components
import Gallery from '@template/section/Gallery';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Kihyeon | Industrial designer</title>
      </Head>
      <Gallery />
    </>
  );
};

export default IndexPage;
export async function getStaticProps() {
  return {
    props: {},
  };
}
