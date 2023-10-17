import { authApi } from './api/auth';
import { gameApi } from './api/game';
import { userApi } from './api/user';

export const {
  useCreateUserMutation,
  useGetUserQuery,
  useGetBalanceQuery,
  useUpdateNickMutation,
  useUpdatePasswordMutation,
} = userApi;

export const { useGetRouletteQuery, useGetGameQuery, useGetRoundQuery, useCreateGameMutation } =
  gameApi;

export const { useSignInMutation } = authApi;
