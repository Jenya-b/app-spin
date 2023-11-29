import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';
import { setBalance } from 'store/reducers/userSlice';

interface User {
  reg_date: string;
  username: string;
  nick: string;
  mute: number;
  ban: number;
  ip: string;
  logo: string;
}

interface UpdatePass {
  passwd: string;
}

enum CurrencyEnum {
  BTC = 'btc',
  XML = 'xmr',
  LTC = 'ltc',
  USDT = 'usdt',
}

interface CurrencyParam {
  val: number;
  ingame: number;
}

export type Balance = {
  [key in CurrencyEnum]: CurrencyParam;
};

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
    getUser: build.query<User, null>({
      query: () => ({
        url: `user`,
      }),
    }),
    getBalance: build.query<Balance, null>({
      query: () => ({
        url: `user_balance`,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBalance(data));
        } catch {
          throw new Error();
        }
      },
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
