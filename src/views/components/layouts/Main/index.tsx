import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';

// Style
import Grid from '@style/Grid';
import DefaultTheme from '@style/themes';
import '@style/_base.scss';

interface Props {
  children?: any;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <GridThemeProvider gridTheme={Grid}>
        <ThemeProvider theme={DefaultTheme}>
          <main>{children}</main>
        </ThemeProvider>
      </GridThemeProvider>
    </>
  );
};

export default MainLayout;
