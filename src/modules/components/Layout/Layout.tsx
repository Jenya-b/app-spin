import { Outlet } from 'react-router-dom';

import { Wrapper } from './Layout.styled';
import { Header } from '../Header/Header';
import { Chat } from '../Chat/Chat';
import { Footer } from '../Footer/Footer';

export const Layout = () => (
  <Wrapper>
    <Header />
    <Outlet />
    <Chat />
    <Footer />
  </Wrapper>
);
