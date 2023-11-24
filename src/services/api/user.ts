import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

interface User {
  user_id: number;
  reg_date: string;
  username: string;
  nick: string;
  email: string;
}

interface UpdatePass {
  passwd: string;
}

interface Balance {
  user_id: number;
  btc: number;
  xmr: number;
  ltc: number;
  usdt: number;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userReducer.token;
      if (token) {
        headers.set('token', `${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getUser: build.query<User, number>({
      query: (userId) => ({
        url: `user/${userId}`,
      }),
    }),
    getBalance: build.query<Balance, null>({
      query: () => ({
        url: `user_balance`,
      }),
    }),
    updatePassword: build.mutation<null, UpdatePass>({
      query: (body) => ({
        method: 'POST',
        url: 'user/update_passwd',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
