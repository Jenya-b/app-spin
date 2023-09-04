import { useResize } from 'hooks/useResize';
import { path } from 'modules/router/path';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RequireAdminProps {
  children: JSX.Element;
}

export const RequireAdmin = ({ children }: RequireAdminProps) => {
  const navigate = useNavigate();
  const [width] = useResize();

  useEffect(() => {
    if (!width) return;
    if (width < 1024) navigate(path.home);
  }, [width]);

  return children;
};
