import React from 'react';
import styled from 'styled-components';
// Components
import Link from '@atom/Link';
import HoverOverCard from '@atom/card/HoverOver';
import { media } from 'styled-bootstrap-grid';

const Section = styled.div`
  background-image: url(${process.env.GATSBY_FILE_SERVER}/kakaotalk_photo_2019-05-25-13-58-27.jpeg);
  background-size: cover;
`;

const StyledLink = styled(Link)`
  width: 100%;
  ${media.sm`
    width: auto;
  `}
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

const GallerySection = () => (
  <Section className="section">
    <InnerSection>
      <StyledLink direction="left" to="/project/butterfleye">
        <HoverOverCard
          imgSrc={`${process.env.GATSBY_FILE_SERVER}/butterfleye6.jpg`}
          title="Butterfleye"
          content="FASHION EYEWEAR"
        />
      </StyledLink>
      <StyledLink direction="left" to="/project/modular">
        <HoverOverCard
          imgSrc={`${process.env.GATSBY_FILE_SERVER}/modulegoggle.jpg`}
          title="MODULAR"
          content="SMART INDUSTRIAL SAFETY GOGGLE"
        />
      </StyledLink>
      <StyledLink direction="left" to="/project/sound-spot">
        <HoverOverCard
          imgSrc={`${process.env.GATSBY_FILE_SERVER}/124-min.jpg`}
          title="Sound Spot"
          content="Sound signage film directional speaker"
        />
      </StyledLink>
    </InnerSection>
  </Section>
);
export default GallerySection;
