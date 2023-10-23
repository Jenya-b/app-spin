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
  Complete = 'complete',
}

interface LongResponse {
  round_id: number;
  status: StatusesLong;
  coef: number;
  timing: number;
  timeUntilRound: number | null;
  next_round: number;
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
    getLongGame: build.query<LongResponse, null>({
      query: () => ({
        url: 'game/crash/last_round',
      }),
    }),
  }),
});
