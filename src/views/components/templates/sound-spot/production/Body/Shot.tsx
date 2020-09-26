import React from 'react';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';

const SoundspotBodyShot = () => {
  return (
    <>
      <AnimationRowImg imgSrc={`${process.env.FILE_SERVER}/3-min-1.png`} />
      <AnimationRowImg imgSrc={`${process.env.FILE_SERVER}/min-1.png`} />
      <AnimationRowImg
        imgSrc={`${process.env.FILE_SERVER}/sound-spot-min-1.png`}
      />
      <AnimationRowImg imgSrc={`${process.env.FILE_SERVER}/12-min-1.png`} />
      <AnimationRowImg imgSrc={`${process.env.FILE_SERVER}/min-1.png`} />
    </>
  );
};

export default SoundspotBodyShot;
