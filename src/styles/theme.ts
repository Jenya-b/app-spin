import { createTheme } from '@mui/material';

import { colors } from './colors';

export const theme = createTheme({
  colors: {
    bgPrimary: colors.blue100,
  },

  cursor: 'pointer',

  order: {
    mainIndex: 150,
    firstIndex: 100,
    mediumIndex: 50,
    lastIndex: 10,
  },
});
