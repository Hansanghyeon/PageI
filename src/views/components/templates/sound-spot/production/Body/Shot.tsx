import React from 'react';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';

const SoundspotBodyShot = () => {
  return (
    <>
      <AnimationRowImg
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/sound-spot/-.3-min.png`}
      />
      <AnimationRowImg
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/sound-spot/_-min.png`}
      />
      <AnimationRowImg
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/sound-spot/sound-spot---min-1.png`}
      />
      <AnimationRowImg
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/sound-spot/-12-min-1.png`}
      />
      <AnimationRowImg
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/sound-spot/_-min.png`}
      />
    </>
  );
};

export default SoundspotBodyShot;
