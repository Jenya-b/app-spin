import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

export const Layout = () => (
  <Wrapper>
    <Outlet />
  </Wrapper>
);

export default Layout;
