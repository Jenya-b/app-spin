import { CryptoNameType } from 'interfaces/crypto';

export enum CriptoEnum {
  BTC = 'btc',
  USDT = 'usdt',
  XMR = 'xmr',
  LTC = 'ltc',
  SPIN = 'spin',
}

export interface InGameDataType {
  cryptoName: CryptoNameType;
  amount: number;
}

export const inGameData: InGameDataType[] = [
  {
    cryptoName: 'btc',
    amount: 0.003,
  },
  {
    cryptoName: 'usdt',
    amount: 0.003,
  },
  {
    cryptoName: 'xmr',
    amount: 0.003,
  },
  {
    cryptoName: 'ltc',
    amount: 0.003,
  },
  {
    cryptoName: 'spin',
    amount: 0.003,
  },
];

export const historyNumbers = [
  2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1,
  2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1, 2.05, 1.1,
];

export interface IHistoryData {
  userName: string;
  bet: number;
  withdraw: number;
  result: number;
}

export const historyData: IHistoryData[] = [
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
  {
    userName: 'Player1',
    bet: 0.000003,
    withdraw: 6,
    result: 2.05,
  },
];
