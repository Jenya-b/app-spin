import { authApi } from './api/auth';
import { gameApi } from './api/game';
import { userApi } from './api/user';

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useGetBalanceQuery,
  useLazyGetBalanceQuery,
  useUpdatePasswordMutation,
} = userApi;

export const {
  useGetRouletteQuery,
  useGetGameQuery,
  useGetRoundQuery,
  useCreateGameMutation,
  useGetLongGameQuery,
  useCrashBetMutation,
  useLazyCrashStopQuery,
  useLazyHasLongGameQuery,
  useHistoryLongGameQuery,
  useUserHistoryLongQuery,
  useCurRoundBetsQuery,
} = gameApi;

export const { useSignInMutation, useCheckTokenMutation, useRegistrationMutation } = authApi;
