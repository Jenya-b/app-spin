import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import settingReducer from './reducers/settingSlice';
import userReducer from './reducers/userSlice';
import notifyReducer from './reducers/notifySlice';
import currencyReducer from './reducers/currencySlice';
import gameReducer from './reducers/gameSlice';
import { userApi } from 'services/api/user';
import { gameApi } from 'services/api/game';
import { chatApi } from 'services/api/chat';
import { walletApi } from 'services/api/wallet';
import { authApi } from 'services/api/auth';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [gameApi.reducerPath]: gameApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [walletApi.reducerPath]: walletApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    settingReducer,
    userReducer,
    notifyReducer,
    currencyReducer,
    gameReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      gameApi.middleware,
      chatApi.middleware,
      walletApi.middleware,
      authApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
