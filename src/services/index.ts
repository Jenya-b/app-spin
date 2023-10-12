import { userApi } from './api/user';

export const {
  useCreateUserMutation,
  useGetUserQuery,
  useGetBalanceQuery,
  useUpdateNickMutation,
  useUpdatePasswordMutation,
} = userApi;
