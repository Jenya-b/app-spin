import { createBrowserRouter } from 'react-router-dom';

import { path } from './path';
import { Layout } from 'modules/components';
import { LongPage, RoulettePage } from 'modules/pages';

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
    ],
  },
]);
