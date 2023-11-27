import { Suspense } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import { Header } from 'modules/components/Header/Header';
import { Wrapper, Main, NavWrap, Button } from './Info.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { Chat } from 'modules/components/Chat/Chat';
import { NavInfo } from 'modules/components/NavInfo/NavInfo';
import { path } from 'modules/router/path';
import { useResize } from 'hooks/useResize';

export const LayoutInfo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [width] = useResize();

  const handleClick = () => {
    const { pathname } = state.from;
    navigate(pathname ?? path.home);
  };

  return (
    <Wrapper>
      <Header />
      <Main>
        {width > 1023 && (
          <NavWrap>
            <NavInfo />
          </NavWrap>
        )}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Button onClick={handleClick}>back</Button>
      </Main>
      {width > 1023 && <Chat />}
    </Wrapper>
  );
};
