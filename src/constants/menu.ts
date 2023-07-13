import { path } from 'modules/router/path';
import { menuIcon } from './images';
import { INavMenu } from 'interfaces/menu';

export const navMenu: INavMenu[] = [
  {
    title: 'long',
    iconUrl: menuIcon.long,
    path: path.home,
  },
  {
    title: 'roulette',
    iconUrl: menuIcon.roulette,
    path: path.roulette,
  },
  {
    title: 'btc x eth',
    iconUrl: menuIcon.btnEth,
    path: path.btnEth,
  },
  {
    title: 'futures',
    iconUrl: menuIcon.futures,
    path: path.futures,
  },
];
