import { lazy } from 'react';

export const LongPage = lazy(() => import('./Long/Long'));
export const RoulettePage = lazy(() => import('./Roulette/Roulette'));
export const FuturesPage = lazy(() => import('./Futures/Futures'));
export const BtnEthPage = lazy(() => import('./BtnEth/BtnEth'));
export const SettingPage = lazy(() => import('./Setting/Setting'));
