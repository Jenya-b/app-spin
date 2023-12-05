import { authApi } from './api/auth';
import { chatApi } from './api/chat';
import { crashApi } from './api/crash';
import { gameApi } from './api/game';
import { userApi } from './api/user';
import { walletApi } from './api/wallet';

export const { useGetUserQuery, useUpdatePasswordMutation } = userApi;

export const { useGetRouletteQuery, useGetGameQuery, useGetRoundQuery, useCreateGameMutation } =
  gameApi;

export const {
  useCrashBetMutation,
  useLazyHasLongGameQuery,
  useUserHistoryLongQuery,
  useLazyCrashStopQuery,
} = crashApi;

export const { useSignInMutation, useCheckTokenMutation, useRegistrationMutation } = authApi;

export const { useAddMessageMutation } = chatApi;

export const { useGetWalletQuery, useLazyGetWalletQuery, useSendWalletMutation } = walletApi;
