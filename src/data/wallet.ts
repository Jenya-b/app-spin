import { CryptoNameType } from 'interfaces/crypto';

interface MoneyType {
  crypto: number;
  usd: number;
}

export interface IWallet {
  cryptoName: CryptoNameType;
  amount: MoneyType;
  inGame: MoneyType;
  available: MoneyType;
}

interface ITransfer {
  cryptoName: CryptoNameType;
  price: number;
}

export const wallet: IWallet[] = [
  {
    cryptoName: 'btc',
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
    cryptoName: 'usdt',
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
    cryptoName: 'xmr',
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
    cryptoName: 'ltc',
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
    cryptoName: 'spin',
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
    cryptoName: 'btc',
    price: 30000,
  },
  {
    cryptoName: 'usdt',
    price: 30000,
  },
  {
    cryptoName: 'xmr',
    price: 30000,
  },
  {
    cryptoName: 'ltc',
    price: 30000,
  },
];
