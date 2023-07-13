import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: localStorage.getItem('i18nextLng') ?? 'ru',
};

export const languageSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
