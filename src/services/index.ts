import { authApi } from './api/auth';
import { crashApi } from './api/crash';
import { gameApi } from './api/game';
import { userApi } from './api/user';

export const { useGetUserQuery, useGetBalanceQuery, useUpdatePasswordMutation } = userApi;

export const { useGetRouletteQuery, useGetGameQuery, useGetRoundQuery, useCreateGameMutation } =
  gameApi;

export const {
  useCrashBetMutation,
  useLazyHasLongGameQuery,
  useHistoryLongGameQuery,
  useUserHistoryLongQuery,
  useCurRoundBetsQuery,
  useLazyCrashStopQuery,
  useGetLongGameQuery,
} = crashApi;

export const { useSignInMutation, useCheckTokenMutation, useRegistrationMutation } = authApi;
