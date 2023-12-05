import { Loader } from 'modules/components/Loader/Loader';
import { useEffect } from 'react';
import { useCheckTokenMutation } from 'services';
import { useAppSelector } from 'store';
import { userSelector } from 'store/selectors';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { token } = useAppSelector(userSelector);
  const [checkToken, { isLoading }] = useCheckTokenMutation();

  useEffect(() => {
    if (token) {
      checkToken({ token });
    }
  }, [token]);

  if (isLoading) return <Loader />;

  return children;
};
