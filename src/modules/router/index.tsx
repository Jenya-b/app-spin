import { createBrowserRouter } from 'react-router-dom';

import { path } from './path';
import { LayoutMain } from 'modules/components/Layout/Main/Main';
import { LayoutAdmin } from 'modules/components/Layout/Admin/Admin';
import {
  LongPage,
  RoulettePage,
  BtcEthPage,
  FuturesPage,
  SettingPage,
  CreateGamesAdminPanel,
  FuturesAdminPanel,
  LongAdminPanel,
  RouletteAdminPanel,
  UsersAdminPanel,
  TermsOfService,
  AmlPolicy,
  Contact,
  FairPlay,
  GamingPolicy,
  MessagePage,
} from 'modules/pages';
import { LayoutInfo } from 'modules/components/Layout/Info/Info';
import { ErrorBoundary } from 'modules/components/ErrorBoundary/ErrorBoundary';
import { RequireAdmin } from 'hocs/RequireAdmin';
import { RequireAuth } from 'hocs/RequireAuth';

export const router = createBrowserRouter([
  {
    path: path.home,
    errorElement: <ErrorBoundary />,
    element: (
      <RequireAuth>
        <LayoutMain />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: <LongPage />,
      },
      {
        path: path.roulette,
        element: <RoulettePage />,
      },
      {
        path: path.btcEth,
        element: <BtcEthPage />,
      },
      {
        path: path.futures,
        element: <FuturesPage />,
      },
      {
        path: path.setting,
        element: <SettingPage />,
      },
      {
        path: path.messages,
        element: <MessagePage />,
      },
    ],
  },
  {
    path: path.admin,
    errorElement: <ErrorBoundary />,
    element: (
      <RequireAdmin>
        <LayoutAdmin />
      </RequireAdmin>
    ),
    children: [
      {
        index: true,
        element: <UsersAdminPanel />,
      },
      {
        path: path.adminLong,
        element: <LongAdminPanel />,
      },
      {
        path: path.adminRoulette,
        element: <RouletteAdminPanel />,
      },
      {
        path: path.adminBtcEth,
        element: <CreateGamesAdminPanel />,
      },
      {
        path: path.adminFutures,
        element: <FuturesAdminPanel />,
      },
    ],
  },
  {
    path: path.info,
    errorElement: <ErrorBoundary />,
    element: <LayoutInfo />,
    children: [
      {
        index: true,
        element: <TermsOfService />,
      },
      {
        path: path.amlPolicy,
        element: <AmlPolicy />,
      },
      {
        path: path.contact,
        element: <Contact />,
      },
      {
        path: path.fairPlay,
        element: <FairPlay />,
      },
      {
        path: path.gamingPolicy,
        element: <GamingPolicy />,
      },
    ],
  },
]);
