import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  tokenInfo: {
    token: string;
    expires: string;
  } | null;
  isAuth: boolean;
  isAdmin: boolean;
}

const initialState: InitialState = {
  tokenInfo: null,
  isAuth: false,
  isAdmin: true,
};

export const settingSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string; expires: string }>) => {
      state.tokenInfo = action.payload;
    },
    authUser: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { authUser, setToken } = settingSlice.actions;

export default settingSlice.reducer;
