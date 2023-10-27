import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { setToken } from 'store/reducers/userSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (build) => ({
    signIn: build.mutation<
      { token: string; expires: string },
      { username: string; password: string }
    >({
      query: (body) => ({
        method: 'POST',
        url: 'login',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem('token', data.token);
          dispatch(setToken(data.token));
        } catch {
          throw new Error();
        }
      },
    }),

    checkToken: build.mutation<{ user_id: number; expires: string }, { token: string }>({
      query: (body) => ({
        method: 'POST',
        url: 'get_token',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
