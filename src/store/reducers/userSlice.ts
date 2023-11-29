import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Balance } from 'services/api/user';

const token = localStorage.getItem('token');

interface InitialState {
  token: string | null;
  isAuth: boolean;
  isAdmin: boolean;
  currentUser: number | null;
  balance: Balance | null;
}

const initialState: InitialState = {
  token: token ?? token,
  isAuth: false,
  isAdmin: true,
  currentUser: null,
  balance: null,
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
    setBalance: (state, action: PayloadAction<Balance>) => {
      state.balance = action.payload;
    },
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    },
  },
});

export const { authUser, setToken, logout, setCurrentUser, setBalance } = settingSlice.actions;

export default settingSlice.reducer;
