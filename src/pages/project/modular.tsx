import styled from 'styled-components';
// components
import IntroSection from '@template/modular/intro';
import BackgroundSection from '@template/modular/background';
import InsightSection from '@template/modular/insight';
import ConceptSection from '@template/modular/concept';
import ConclusionSection from '@template/modular/conclusion';
import ProductSection from '@template/modular/product';
import TailSection from '@template/modular/tail';

const Wrap = styled.div`
  --bg: ${({ theme }) => theme.project.modular.$bg};
  --textColor: ${({ theme }) => theme.project.modular.$color};
  background-color: var(--bg);
  color: var(--textColor);
  *,
  p {
    font-size: 14px;
  }
`;
const Modular = () => (
  <>
    <Wrap>
      <IntroSection />
      <BackgroundSection />
      <InsightSection />
      <ConceptSection />
      <ConclusionSection />
      <ProductSection />
      <TailSection />
    </Wrap>
  </>
);

export default Modular;
export async function getStaticProps() {
  return {
    props: {},
  };
}
