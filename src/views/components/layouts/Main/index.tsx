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
  img {
    margin: 0;
    width: 100%;
  }
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
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
