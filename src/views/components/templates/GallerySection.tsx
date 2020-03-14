import React from 'react';
import styled from 'styled-components';

import HoverOverCard from '@atom/card/HoverOver';

const Section = styled.div`
  background-image: url(https://s3-ap-northeast-2.amazonaws.com/pagei/20190629131754/KakaoTalk_Photo_2019-05-25-13-58-27.jpeg);
  .fp-tableCell {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const GallerySection = () => (
  <Section className="section">
    <HoverOverCard
      imgSrc="https://s3-ap-northeast-2.amazonaws.com/pagei/20190715174256/Butterfleye6.jpg"
      title="Butterfleye"
      content="FASHION EYEWEAR"
    />
    <HoverOverCard
      imgSrc="https://s3-ap-northeast-2.amazonaws.com/pagei/modulegoggle.jpg"
      title="MODULAR"
      content="SMART INDUSTRIAL SAFETY GOGGLE"
    />
  </Section>
);
export default GallerySection;
