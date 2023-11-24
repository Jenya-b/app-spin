import { CriptoEnum } from 'store/reducers/currencySlice';

export interface InGameDataType {
  cryptoName: CriptoEnum;
  amount: number;
}

export const inGameData: InGameDataType[] = [
  {
    cryptoName: CriptoEnum.BTC,
    amount: 0.003,
  },
  {
    cryptoName: CriptoEnum.USDT,
    amount: 0.003,
  },
  {
    cryptoName: CriptoEnum.XMR,
    amount: 0.003,
  },
  {
    cryptoName: CriptoEnum.LTC,
    amount: 0.003,
  },
  {
    cryptoName: CriptoEnum.SPIN,
    amount: 0.003,
  },
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
