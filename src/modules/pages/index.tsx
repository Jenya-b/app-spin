import { lazy } from 'react';

export const LongPage = lazy(() => import('./Long/Long'));
export const RoulettePage = lazy(() => import('./Roulette/Roulette'));
export const FuturesPage = lazy(() => import('./Futures/Futures'));
export const BtcEthPage = lazy(() => import('./BtnEth/BtcEth'));
export const SettingPage = lazy(() => import('./Setting/Setting'));
export const LongAdminPanel = lazy(() => import('./Admin/Long/Long'));
export const RouletteAdminPanel = lazy(() => import('./Admin/Roulette/Roulette'));
export const FuturesAdminPanel = lazy(() => import('./Admin/Futures/Futures'));
export const CreateGamesAdminPanel = lazy(() => import('./Admin/CreateGames/CreateGames'));
export const UsersAdminPanel = lazy(() => import('./Admin/Users/Users'));
