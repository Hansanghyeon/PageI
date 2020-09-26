import React from 'react';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';

const SoundspotRemoteControllerShot = () => (
  <>
    <AnimationRowImg imgSrc={`${process.env.FILE_SERVER}/16-min-1.png`} />
    <AnimationRowImg imgSrc={`${process.env.FILE_SERVER}/123-min-1.png`} />
    <AnimationRowImg imgSrc={`${process.env.FILE_SERVER}/125-min-1.png`} />
  </>
);

export default SoundspotRemoteControllerShot;
