import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

interface User {
  user_id: number;
  reg_date: string;
  username: string;
  nick: string;
  email: string;
}

interface CreateUserRequest {
  username: string;
  nickname: string;
  password: string;
}

interface UpdatePass {
  user_id: number;
  passwd: string;
}

interface UpdateNickname {
  user_id: number;
  nick: string;
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
    getBalance: build.query<Balance, number>({
      query: (userId) => ({
        url: `user_balance/${userId}`,
      }),
    }),
    createUser: build.mutation<{ user_id: number }, CreateUserRequest>({
      query: (body) => ({
        method: 'POST',
        url: 'user/add',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
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
    updateNick: build.mutation<null, UpdateNickname>({
      query: ({ user_id, nick }) => ({
        method: 'PUT',
        url: `user/update_nick/${user_id}`,
        body: { nick },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
