import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import { router } from 'modules/router';
import { theme } from 'styles/theme';
import { useRoundInfoSocket } from 'hooks/useRoundInfoSocket';

export const App = () => {
  useRoundInfoSocket();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
