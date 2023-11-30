import { Loader } from 'modules/components/Loader/Loader';
import { useEffect } from 'react';
import { useCheckTokenMutation, useLazyGetBalanceQuery } from 'services';
import { useAppDispatch, useAppSelector } from 'store';
import { setCurrentUser } from 'store/reducers/userSlice';
import { userSelector } from 'store/selectors';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const dispatch = useAppDispatch();
  const { token, isAuth } = useAppSelector(userSelector);
  const [checkToken, { data, isLoading, isSuccess }] = useCheckTokenMutation();
  const [fetchBalance] = useLazyGetBalanceQuery();

  useEffect(() => {
    if (token) {
      checkToken({ token });
    }
  }, [token]);

  useEffect(() => {
    if (isSuccess) {
      if (data && data.user_id) {
        dispatch(setCurrentUser(data?.user_id));
        return;
      }
    }

    dispatch(setCurrentUser(null));
  }, [isSuccess]);

  useEffect(() => {
    if (!isAuth) {
      return;
    }
    fetchBalance(null);
  }, [isAuth]);

  if (isLoading) return <Loader />;

  return children;
};
