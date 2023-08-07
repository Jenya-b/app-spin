import { MouseEvent } from 'react';

import { CryptoNameType } from 'interfaces/crypto';
import { Wrapper } from './CryptoBtn.styled';
import { cryptoIcon } from 'constants/images';

interface CryptoBtnProps {
  cryptoName: CryptoNameType;
  criptoActive: CryptoNameType;
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
