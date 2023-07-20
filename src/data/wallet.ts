export type CriptoNameType = 'btc' | 'usdt' | 'xmr' | 'ltc' | 'spin';

interface MoneyType {
  cripto: number;
  usd: number;
}

export interface IWallet {
  criptoName: CriptoNameType;
  amount: MoneyType;
  inGame: MoneyType;
  available: MoneyType;
}

export const wallet: IWallet[] = [
  {
    criptoName: 'btc',
    amount: {
      cripto: 0.43,
      usd: 240.31,
    },
    inGame: {
      cripto: 0.0003,
      usd: 40.31,
    },
    available: {
      cripto: 0.42007,
      usd: 200,
    },
  },
  {
    criptoName: 'usdt',
    amount: {
      cripto: 0.43,
      usd: 240.31,
    },
    inGame: {
      cripto: 0.0003,
      usd: 40.31,
    },
    available: {
      cripto: 0.42007,
      usd: 200,
    },
  },
  {
    criptoName: 'xmr',
    amount: {
      cripto: 0.43,
      usd: 240.31,
    },
    inGame: {
      cripto: 0.0003,
      usd: 40.31,
    },
    available: {
      cripto: 0.42007,
      usd: 200,
    },
  },
  {
    criptoName: 'ltc',
    amount: {
      cripto: 0.43,
      usd: 240.31,
    },
    inGame: {
      cripto: 0.0003,
      usd: 40.31,
    },
    available: {
      cripto: 0.42007,
      usd: 200,
    },
  },
  {
    criptoName: 'spin',
    amount: {
      cripto: 0.43,
      usd: 240.31,
    },
    inGame: {
      cripto: 0.0003,
      usd: 40.31,
    },
    available: {
      cripto: 0.42007,
      usd: 200,
    },
  },
];
