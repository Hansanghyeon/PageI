// Components
import IntroSection from '@template/lenif/intro';
import BackgroundSection from '@template/lenif/background';
import ProblemSection from '@template/lenif/problem';
import InsightSection from '@template/lenif/insight';

const LENIF = () => (
  <>
    <IntroSection />
    <BackgroundSection />
    <ProblemSection />
    <InsightSection />
  </>
);

export default LENIF;
export async function getStaticProps() {
  return {
    props: {},
  };
}
