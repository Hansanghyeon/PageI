import React from 'react';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';

const SoundspotRemoteControllerShot = () => (
  <>
    <AnimationRowImg
      imgSrc={`${process.env.GATSBY_FILE_SERVER}/-16-min-1.png`}
    />
    <AnimationRowImg
      imgSrc={`${process.env.GATSBY_FILE_SERVER}/_.123-min-1.png`}
    />
    <AnimationRowImg
      imgSrc={`${process.env.GATSBY_FILE_SERVER}/_.125-min-1.png`}
    />
  </>
);

export default SoundspotRemoteControllerShot;
