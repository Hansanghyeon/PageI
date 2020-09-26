import React from 'react';
import styled from 'styled-components';
import Link from '@atom/Link';
// Components
import HoverOverCard from '@bit/hansanghyeon.card.hoverover';
import { media } from 'styled-bootstrap-grid';

const Section = styled.div`
  background-image: url(${process.env.FILE_SERVER}/kakaotalk_photo_2019-05-25-13-58-27.jpeg);
  background-size: cover;
  min-height: 100vh;
`;

const InnerSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  padding-bottom: 120px;
  ${media.sm`
    padding-top: 100px;
    padding-bottom: 200px;
  `};
`;

const GallerySection: React.FC = () => (
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
export default GallerySection;
