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
