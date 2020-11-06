import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages';

/* Theme */
import theme, { GlobalStyle } from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
