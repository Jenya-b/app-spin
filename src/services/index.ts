import { authApi } from './api/auth';
import { gameApi } from './api/game';
import { userApi } from './api/user';

export const {
  useCreateUserMutation,
  useGetUserQuery,
  useLazyGetUserQuery,
  useGetBalanceQuery,
  useLazyGetBalanceQuery,
  useUpdateNickMutation,
  useUpdatePasswordMutation,
} = userApi;

export const {
  useGetRouletteQuery,
  useGetGameQuery,
  useGetRoundQuery,
  useCreateGameMutation,
  useGetLongGameQuery,
  useCrashBetMutation,
} = gameApi;

export const { useSignInMutation, useCheckTokenMutation } = authApi;
