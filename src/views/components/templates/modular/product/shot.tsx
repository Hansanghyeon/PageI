import React from 'react';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';

export const one = () => {
  return (
    <>
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.FILE_SERVER}/conclusion-img01-.png`}
      />
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.FILE_SERVER}/conclusion-img02-scaled-1.png`}
      />
    </>
  );
};

export const two = () => {
  return (
    <>
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.FILE_SERVER}/conclusion-case-01.png`}
      />
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.FILE_SERVER}/conclusion-case-02.png`}
      />
      <AnimationRowImg
        bgColor="transparent"
        imgSrc={`${process.env.FILE_SERVER}/conclusion-case-03.png`}
      />
    </>
  );
};
