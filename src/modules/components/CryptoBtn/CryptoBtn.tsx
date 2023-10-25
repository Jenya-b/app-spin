import { MouseEvent } from 'react';

import { Wrapper } from './CryptoBtn.styled';
import { cryptoIcon } from 'constants/images';
import { CriptoEnum } from 'store/reducers/currencySlice';

interface CryptoBtnProps {
  cryptoName: CriptoEnum;
  criptoActive: CriptoEnum;
  handleActiveCripto: (event: MouseEvent<HTMLDivElement>) => void;
}

export const CryptoBtn = ({ cryptoName, criptoActive, handleActiveCripto }: CryptoBtnProps) => (
  <Wrapper
    id={cryptoName}
    className={cryptoName === criptoActive ? 'active' : ''}
    onClick={handleActiveCripto}
  >
    <img src={cryptoIcon[cryptoName]} alt="" />
  </Wrapper>
);
