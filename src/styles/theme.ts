import { createTheme } from '@mui/material';

import { colors } from './colors';

export const theme = createTheme({
  colors: {
    bgPrimary: colors.blue100,
    bgSecondary: colors.blue200,
    bgTertiary: colors.blue500,
    borderPrimary: colors.whiteTransparent,
    buttonPrimary: colors.blueLight100,
    inputPrimary: colors.blue400,

    textPrimary: colors.white,
  },

  cursor: 'pointer',

  order: {
    mainIndex: 150,
    firstIndex: 100,
    mediumIndex: 50,
    lastIndex: 10,
  },

  borders: {
    radiusPrimary: 16,
    radiusSecondary: 8,
  },
});
