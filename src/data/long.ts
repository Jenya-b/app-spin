import { CriptoNameType } from 'interfaces/cripto';

export interface InGameDataType {
  criptoName: CriptoNameType;
  amount: number;
}

export const inGameData: InGameDataType[] = [
  {
    criptoName: 'btc',
    amount: 0.003,
  },
  {
    criptoName: 'usdt',
    amount: 0.003,
  },
  {
    criptoName: 'xmr',
    amount: 0.003,
  },
  {
    criptoName: 'ltc',
    amount: 0.003,
  },
  {
    criptoName: 'spin',
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
