import { CriptoEnum } from 'store/reducers/currencySlice';

export interface IWallet {
  cryptoName: string;
  val: number;
  ingame: number;
  available: number;
}

interface ITransfer {
  cryptoName: CriptoEnum;
  price: number;
}

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
