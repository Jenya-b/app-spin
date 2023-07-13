import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyles from 'styles/global';
import { router } from 'modules/router';
import { theme } from 'styles/theme';
import { store } from 'store';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading..</div>}>
          <RouterProvider router={router} />
        </Suspense>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
