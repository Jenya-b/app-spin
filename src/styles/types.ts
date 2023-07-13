export interface CustomTheme {
  colors: {
    bgPrimary: string;
    bgSecondary: string;
    textPrimary: string;
    borderPrimary: string;
    buttonPrimary: string;
  };

  cursor: string;

  order: {
    mainIndex: number;
    firstIndex: number;
    mediumIndex: number;
    lastIndex: number;
  };
}
