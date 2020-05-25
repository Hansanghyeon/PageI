import React from 'react';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';

export const one = () => {
  return (
    <>
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/modular/conclusion-img01-.png`}
      />
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/modular/conclusion-img02-scaled-1.png`}
      />
    </>
  );
};

export const two = () => {
  return (
    <>
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/modular/conclusion-case-01.png`}
      />
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/modular/conclusion-case-02.png`}
      />
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.GATSBY_FILE_SERVER}/project/modular/conclusion-case-03.png`}
      />
    </>
  );
};
