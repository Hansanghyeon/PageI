import React from 'react';
import styled from 'styled-components';
// Components
import Link from '@atom/Link';
import HoverOverCard from '@atom/card/HoverOver';
import { respondTo } from '@style/_respondTo';

const Section = styled.div`
  background-image: url(https://wp.kihyeon.page/wp-content/uploads/KakaoTalk_Photo_2019-05-25-13-58-27.jpeg);
`;

const StyledLink = styled(Link)`
  width: 100%;
  ${respondTo.sm`
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
  ${respondTo.sm`
    padding-top: 100px;
    padding-bottom: 200px;
  `};
`;

const GallerySection = () => (
  <Section className="section">
    <InnerSection>
      <StyledLink direction="left" to="/project/butterfleye">
        <HoverOverCard
          imgSrc="https://wp.kihyeon.page/wp-content/uploads/Butterfleye6.jpg"
          title="Butterfleye"
          content="FASHION EYEWEAR"
        />
      </StyledLink>
      <StyledLink direction="left" to="/404">
        <HoverOverCard
          imgSrc="https://wp.kihyeon.page/wp-content/uploads/modulegoggle.jpg"
          title="MODULAR"
          content="SMART INDUSTRIAL SAFETY GOGGLE"
        />
      </StyledLink>
      <StyledLink direction="left" to="/project/sound-spot">
        <HoverOverCard
          imgSrc="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/백뷰-디테일.124-min.jpg"
          title="Sound Spot"
          content="Sound signage film directional speaker"
        />
      </StyledLink>
    </InnerSection>
  </Section>
);
export default GallerySection;
