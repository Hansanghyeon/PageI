import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';

// Style
import Grid from '@style/Grid';
import DefaultTheme from '@style/themes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <GridThemeProvider gridTheme={Grid}>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyle />
          <main>{children}</main>
        </ThemeProvider>
      </GridThemeProvider>
    </>
  );
};

export default MainLayout;
