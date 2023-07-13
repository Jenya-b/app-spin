import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyles from 'styles/global';
import { router } from 'modules/router';
import { theme } from 'styles/theme';
import { store } from 'store';
import { Loader } from '..';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
