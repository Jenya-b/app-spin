import { Outlet } from 'react-router-dom';

import { Wrapper } from './Layout.styled';
import Header from '../Header/Header';
import { Chat } from '../Chat/Chat';

export const Layout = () => (
  <Wrapper>
    <Header />
    <Outlet />
    <Chat />
  </Wrapper>
);

export default Layout;
