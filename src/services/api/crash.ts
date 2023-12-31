import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

export enum StatusesLong {
  Run = 'run',
  Done = 'done',
  New = 'new',
}

export enum CrashStatuses {
  OK = 'ok',
  FAIL = 'fail',
}

export interface LongResponse {
  round_id: number;
  status: StatusesLong;
  coef: string;
  timing: string;
  next_round: number;
}

export interface CrashBetRequest {
  coin: string;
  bet: number;
  coef?: number;
}

export const crashApi = createApi({
  reducerPath: 'crashApi',
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
    crashBet: build.mutation<{ [key: string]: string | number }, CrashBetRequest>({
      query: (body) => ({
        method: 'POST',
        url: 'bet/make/1',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    hasLongGame: build.query<{ result: CrashStatuses }, null>({
      query: () => ({
        url: `crash/get_cur_bet`,
      }),
    }),
    userHistoryLong: build.query<
      {
        result: Array<{
          round_id: number;
          date: string;
          coin: number;
          bet: number;
          coef: number;
          status: string;
          profit: string;
        }>;
      },
      null
    >({
      query: () => ({
        url: `crash/user_bets_history`,
      }),
    }),
    crashStop: build.query<{ [key: string]: string | number }, null>({
      query: () => ({
        url: 'crash/bet/take',
      }),
    }),
  }),
});
