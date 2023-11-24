import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

interface CreateGame {
  name: string;
  coin: string;
  bet: number;
  bank: number;
  user_id: number;
}

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
  coef: number;
  timing: number;
  next_round: number;
}

export interface CrashBetRequest {
  coin: string;
  bet: number;
  coef?: number;
}

export const gameApi = createApi({
  reducerPath: 'gameApi',
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
    getGame: build.query<null, number>({
      query: (gameId) => ({
        url: `game/${gameId}`,
      }),
    }),
    getRound: build.query<null, number>({
      query: (roundId) => ({
        url: `game/round/${roundId}`,
      }),
    }),
    getRoulette: build.query<null, number>({
      query: (rouletteId) => ({
        url: `game/roulette/${rouletteId}`,
      }),
    }),
    createGame: build.mutation<{ chat_id: number }, CreateGame>({
      query: ({ user_id, ...body }) => ({
        method: 'POST',
        url: `game/new/${user_id}`,
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    // TODO getLongGame не используется, подключили ws
    getLongGame: build.query<LongResponse, null>({
      query: () => ({
        url: 'game/crash/last_round',
      }),
    }),
    crashBet: build.mutation<{ [key: string]: string | number }, CrashBetRequest>({
      query: (body) => ({
        method: 'POST',
        url: 'crash/bet/make',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    crashStop: build.query<{ [key: string]: string | number }, null>({
      query: () => ({
        url: 'crash/bet/take',
      }),
    }),
    hasLongGame: build.query<{ result: CrashStatuses }, null>({
      query: () => ({
        url: `crash/get_cur_bet`,
      }),
    }),
    historyLongGame: build.query<{ result: Array<number> }, null>({
      query: () => ({
        url: `crash/rounds_history`,
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
    curRoundBets: build.query<
      { result: Array<{ user_id: number; nickname: string; coin: number; bet: number }> },
      null
    >({
      query: () => ({
        url: `crash/cur_round_bets`,
      }),
    }),
  }),
});
