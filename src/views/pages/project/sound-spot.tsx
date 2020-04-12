import React from 'react';
// Components
import PlanIntroSection from '@template/sound-spot/plan/Intro';
import ProblemSection from '@template/sound-spot/plan/Problem';
import InsightSection from '@template/sound-spot/plan/Insight';
import MotiveSection from '@template/sound-spot/plan/Motive';
import SolutionFunctionSection from '@template/sound-spot/plan/SolutionFunction';
import SolutionspotBody from '@template/sound-spot/production/Body';
import SolutionspotShot from '@template/sound-spot/production/Body/Shot';
// Design System

const soundSpot = () => (
  <>
    <PlanIntroSection />
    <ProblemSection />
    <InsightSection />
    <MotiveSection />
    <SolutionFunctionSection />
    <SolutionspotBody />
    <SolutionspotShot />
  </>
);

export default soundSpot;
