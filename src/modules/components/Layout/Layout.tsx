import { Outlet } from 'react-router-dom';

import { Wrapper } from './Layout.styled';
import Header from '../Header/Header';

export const Layout = () => (
  <Wrapper>
    <Header />
    <Outlet />
  </Wrapper>
);

export default Layout;
