import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import settingReducer from './reducers/settingSlice';
import userSlice from './reducers/userSlice';
import { userApi } from 'services/api/user';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    settingReducer,
    userSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
