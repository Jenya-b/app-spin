import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import { router } from 'modules/router';
import { theme } from 'styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading..</div>}>
        <RouterProvider router={router} />
      </Suspense>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
