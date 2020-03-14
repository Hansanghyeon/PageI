import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
// Components
import PlanIntroSection from '@template/sound-spot/Plan/Intro';
// Design System
import Grid from '@style/Grid';
import DefaultTheme from '@style/themes';

const soundSpot = () => (
  <>
    <GridThemeProvider gridTheme={Grid}>
      <ThemeProvider theme={DefaultTheme}>
        <PlanIntroSection />
      </ThemeProvider>
    </GridThemeProvider>
  </>
);

export default soundSpot;
