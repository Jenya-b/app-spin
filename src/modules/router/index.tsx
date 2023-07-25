import { createBrowserRouter } from 'react-router-dom';

import { path } from './path';
import { Layout } from 'modules/components/Layout/Layout';
import { LongPage, RoulettePage, BtnEthPage, FuturesPage, SettingPage } from 'modules/pages';

export const router = createBrowserRouter([
  {
    path: path.home,
    element: <Layout />,
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
        path: path.btnEth,
        element: <BtnEthPage />,
      },
      {
        path: path.futures,
        element: <FuturesPage />,
      },
      {
        path: path.setting,
        element: <SettingPage />,
      },
    ],
  },
]);
