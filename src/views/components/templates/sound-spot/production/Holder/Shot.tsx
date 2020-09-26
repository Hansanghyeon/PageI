import React from 'react';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';

const SoundspotHolderShot = () => (
  <>
    <AnimationRowImg
      fluid
      imgSrc={[
        `${process.env.GATSBY_FILE_SERVER}/131-1.jpg`,
        `${process.env.GATSBY_FILE_SERVER}/2.132-1.jpg`,
      ]}
    />
  </>
);

export default SoundspotHolderShot;
