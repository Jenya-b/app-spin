import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');

interface InitialState {
  token: string | null;
  isAuth: boolean;
  isAdmin: boolean;
  currentUser: number | null;
}

const initialState: InitialState = {
  token: token ?? token,
  isAuth: false,
  isAdmin: true,
  currentUser: null,
};

export const settingSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    authUser: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<number | null>) => {
      state.currentUser = action.payload;
    },
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    },
  },
});

export const { authUser, setToken, logout, setCurrentUser } = settingSlice.actions;

export default settingSlice.reducer;
