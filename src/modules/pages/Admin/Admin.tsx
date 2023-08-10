import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'modules/components/Header/Header';
import { Loader } from 'modules/components/Loader/Loader';
import {
  Sidebar,
  Wrapper,
  listMenuCss,
  StyledNavLink,
  SearchBlock,
  Label,
  SearchBtn,
  SearchInput,
  SearchTitle,
} from './Admin.styled';
import { List } from 'modules/components/List/List';
import { adminMenu } from 'constants/menu';
import { INavMenu } from 'interfaces/menu';
import { chatData } from 'data/chat';
import { Chat } from 'modules/components/Chat/Chat';

export const Admin = () => {
  const renderItem = ({ iconUrl, path, title }: INavMenu) => (
    <StyledNavLink to={path} icon={iconUrl}>
      <p>{title}</p>
    </StyledNavLink>
  );

  return (
    <Wrapper>
      <Header />
      <Sidebar>
        <SearchBlock>
          <SearchTitle>Choose category</SearchTitle>
          <Label>
            <SearchBtn />
            <SearchInput placeholder="Search" />
          </Label>
        </SearchBlock>
        <List renderItem={renderItem} data={adminMenu} styles={listMenuCss} />
      </Sidebar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Chat chatData={chatData} />
    </Wrapper>
  );
};

export default Admin;
