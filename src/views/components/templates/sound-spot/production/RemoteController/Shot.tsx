import React from 'react';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';

const SoundspotRemoteControllerShot = () => (
  <>
    <AnimationRowImg
      imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/sound-spot/-16-min-1.png`}
    />
    <AnimationRowImg
      imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/sound-spot/_.123-min-1.png`}
    />
    <AnimationRowImg
      imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/sound-spot/_.125-min-1.png`}
    />
  </>
);

export default SoundspotRemoteControllerShot;
