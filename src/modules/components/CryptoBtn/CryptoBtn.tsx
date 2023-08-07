import { MouseEvent } from 'react';

import { CriptoNameType } from 'interfaces/cripto';
import { Wrapper } from './CryptoBtn.styled';
import { criptoIcon } from 'constants/images';

interface CryptoBtnProps {
  cryptoName: CriptoNameType;
  criptoActive: CriptoNameType;
  handleActiveCripto: (event: MouseEvent<HTMLDivElement>) => void;
}

export const CryptoBtn = ({ cryptoName, criptoActive, handleActiveCripto }: CryptoBtnProps) => (
  <Wrapper
    id={cryptoName}
    className={cryptoName === criptoActive ? 'active' : ''}
    onClick={handleActiveCripto}
  >
    <img src={criptoIcon[cryptoName]} alt="" />
  </Wrapper>
);
