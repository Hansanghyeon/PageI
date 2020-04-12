import React from 'react';
// Components
import PlanIntroSection from '@template/sound-spot/Intro';
import ProblemSection from '@template/sound-spot/Problem';
import InsightSection from '@template/sound-spot/Insight';
import MotiveSection from '@template/sound-spot/Motive';
import SolutionFunctionSection from '@template/sound-spot/SolutionFunction';
// Design System

const soundSpot = () => (
  <>
    <PlanIntroSection />
    <ProblemSection />
    <InsightSection />
    <MotiveSection />
    <SolutionFunctionSection />
  </>
);

export default soundSpot;
