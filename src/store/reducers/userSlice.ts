import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isAdmin: true,
};

export const settingSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { authUser } = settingSlice.actions;

export default settingSlice.reducer;
