import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

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
  user_id: number;
  coin: string;
  bet: number;
}

export interface CrashStopRequest {
  user_id: number;
  bet_id: number;
}

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
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
    crashStop: build.mutation<{ [key: string]: string | number }, CrashStopRequest>({
      query: (body) => ({
        method: 'POST',
        url: 'crash/bet/take',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    hasLongGame: build.query<{ result: CrashStatuses }, number>({
      query: (userId) => ({
        url: `crash/get_cur_bet/${userId}`,
      }),
    }),
  }),
});
