import { Outlet } from 'react-router-dom';

import { Wrapper } from './Layout.styled';
import { Header } from '../Header/Header';
import { Chat } from '../Chat/Chat';
import { Footer } from '../Footer/Footer';
import { CountDown } from '../CountDown/CountDown';

export const Layout = () => (
  <Wrapper>
    <Header />
    <Outlet />
    <Chat />
    <CountDown days={1} hours={0} minutes={1} seconds={15} />
    <Footer />
  </Wrapper>
);
