import { CriptoEnum } from 'store/reducers/currencySlice';

interface MoneyType {
  crypto: number;
  usd: number;
}

export interface IWallet {
  cryptoName: CriptoEnum;
  amount: MoneyType;
  inGame: MoneyType;
  available: MoneyType;
}

interface ITransfer {
  cryptoName: CriptoEnum;
  price: number;
}

export const wallet: IWallet[] = [
  {
    cryptoName: CriptoEnum.BTC,
    amount: {
      crypto: 0.43,
      usd: 240.31,
    },
    inGame: {
      crypto: 0.0003,
      usd: 40.31,
    },
    available: {
      crypto: 0.42007,
      usd: 200,
    },
  },
  {
    cryptoName: CriptoEnum.USDT,
    amount: {
      crypto: 0.43,
      usd: 240.31,
    },
    inGame: {
      crypto: 0.0003,
      usd: 40.31,
    },
    available: {
      crypto: 0.42007,
      usd: 200,
    },
  },
  {
    cryptoName: CriptoEnum.XMR,
    amount: {
      crypto: 0.43,
      usd: 240.31,
    },
    inGame: {
      crypto: 0.0003,
      usd: 40.31,
    },
    available: {
      crypto: 0.42007,
      usd: 200,
    },
  },
  {
    cryptoName: CriptoEnum.LTC,
    amount: {
      crypto: 0.43,
      usd: 240.31,
    },
    inGame: {
      crypto: 0.0003,
      usd: 40.31,
    },
    available: {
      crypto: 0.42007,
      usd: 200,
    },
  },
  {
    cryptoName: CriptoEnum.SPIN,
    amount: {
      crypto: 0.43,
      usd: 240.31,
    },
    inGame: {
      crypto: 0.0003,
      usd: 40.31,
    },
    available: {
      crypto: 0.42007,
      usd: 200,
    },
  },
];

export const transfer: ITransfer[] = [
  {
    cryptoName: CriptoEnum.BTC,
    price: 30000,
  },
  {
    cryptoName: CriptoEnum.USDT,
    price: 30000,
  },
  {
    cryptoName: CriptoEnum.XMR,
    price: 30000,
  },
  {
    cryptoName: CriptoEnum.LTC,
    price: 30000,
  },
];
