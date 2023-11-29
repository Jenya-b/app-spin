import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

export interface Wallet {
  coin: string;
  address: string;
  value: number;
  inGame: number;
}

interface SendBtcRequest {
  coin: string;
  address: string;
  value: number;
}

interface SendBtcResponse extends SendBtcRequest {
  coin: string;
  address: string;
  value: number;
  txn_id: string;
}

export const walletApi = createApi({
  reducerPath: 'walletApi',
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
    getWallet: build.query<Wallet, { coin: string }>({
      query: ({ coin }) => ({
        url: `wallet/get/${coin}`,
      }),
    }),
    sendWallet: build.mutation<SendBtcResponse, SendBtcRequest>({
      query: (body) => ({
        method: 'PUT',
        url: 'wallet/send',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
