import React from 'react';
import Link from '@atom/Link';
// Components
import HoverOverCard from '@bit/hansanghyeon.card.hoverover';
import { InnerSection, Section } from './style';

const Gallery: React.FC = () => (
  <Section className="section">
    <InnerSection>
      <Link href="/project/butterfleye">
        <HoverOverCard
          imgSrc={`${process.env.FILE_SERVER}/butterfleye6.jpg`}
          title="Butterfleye"
          content="FASHION EYEWEAR"
        />
      </Link>
      <Link href="/project/modular">
        <HoverOverCard
          imgSrc={`${process.env.FILE_SERVER}/modulegoggle.jpg`}
          title="MODULAR"
          content="SMART INDUSTRIAL SAFETY GOGGLE"
        />
      </Link>
      <Link href="/project/sound-spot">
        <HoverOverCard
          imgSrc={`${process.env.FILE_SERVER}/124-min.jpg`}
          title="Sound Spot"
          content="Sound signage film directional speaker"
        />
      </Link>
    </InnerSection>
  </Section>
);
export default Gallery;
