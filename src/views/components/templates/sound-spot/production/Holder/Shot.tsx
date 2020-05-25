import React from 'react';
// Components
import { AnimationRowImg2 } from '@molecule/AnimationRowImg';

const SoundspotHolderShot = () => (
  <>
    <AnimationRowImg2
      fluid
      imgSrc={[
        `${process.env.GATSBY_FILE_SERVER}/project/sound-spot/_.131-1.jpg`,
        `${process.env.GATSBY_FILE_SERVER}/project/sound-spot/-2.132-1.jpg`,
      ]}
    />
  </>
);

export default SoundspotHolderShot;
