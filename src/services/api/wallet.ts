import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

interface Wallet {
  coin: string;
  address: string;
  value: number;
  inGame: number;
}

interface CreateWalletBtcResponse {
  result: string;
  user_id: number;
  coin: string;
  address: string;
}

interface SendBtcRequest {
  user_id: number;
  address: string;
  value: number;
}

export const walletApi = createApi({
  reducerPath: 'walletApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userReducer.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getWalletBtc: build.query<Wallet, number>({
      query: (userId) => ({
        url: `wallet/btc/get/${userId}`,
      }),
    }),
    createWalletBtc: build.mutation<{ userId: number }, CreateWalletBtcResponse>({
      query: (userId) => ({
        method: 'PUT',
        url: `wallet/btc/create/${userId}`,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    sendBtc: build.mutation<SendBtcRequest, null>({
      query: (body) => ({
        method: 'PUT',
        url: 'wallet/btc/send',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
