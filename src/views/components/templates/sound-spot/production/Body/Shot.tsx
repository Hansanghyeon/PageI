import React from 'react';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';

const SoundspotBodyShot = () => {
  return (
    <>
      <AnimationRowImg
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/-.3-min.png`}
      />
      <AnimationRowImg imgSrc={`${process.env.GATSBY_FILE_SERVER}/_-min.png`} />
      <AnimationRowImg
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/sound-spot---min-1.png`}
      />
      <AnimationRowImg
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/-12-min-1.png`}
      />
      <AnimationRowImg imgSrc={`${process.env.GATSBY_FILE_SERVER}/_-min.png`} />
    </>
  );
};

export default SoundspotBodyShot;
