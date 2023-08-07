import { useTranslation } from 'react-i18next';
import { useState, MouseEvent } from 'react';

import { coinBtc, coinEth } from 'constants/images';
import {
  Wrapper,
  ChooseCoin,
  CoinInfo,
  Button,
  ImgWrap,
  Input,
  Lable,
  criptoListCss,
} from './CreateGameBlock.styled';
import { CryptoNameType } from 'interfaces/crypto';
import { cryptoArr } from 'constants/crypto';
import { List } from 'modules/components/List/List';
import { CryptoBtn } from 'modules/components/CryptoBtn/CryptoBtn';

export const CreateGameBlock = () => {
  const [criptoActive, setCriptoActive] = useState<CryptoNameType>(cryptoArr[0]);
  const { t } = useTranslation();

  const renderItem = (item: CryptoNameType) => (
    <CryptoBtn
      criptoActive={criptoActive}
      cryptoName={item}
      handleActiveCripto={handleActiveCripto}
    />
  );

  const handleActiveCripto = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id as CryptoNameType;

    setCriptoActive(id);
  };

  return (
    <Wrapper>
      <div>
        <Lable>
          <span>{t('bet')}</span>
          <Input placeholder={t('amount')} />
          <List renderItem={renderItem} data={cryptoArr} styles={criptoListCss} />
        </Lable>
      </div>
      <CoinInfo>
        <ImgWrap>
          <img src={coinBtc} alt="btc" />
        </ImgWrap>
        <ChooseCoin>
          <p>CHOOSE COIN</p>
          <p>BITCOIN OR ETHERIUM</p>
        </ChooseCoin>
        <ImgWrap>
          <img src={coinEth} alt="eth" />
        </ImgWrap>
      </CoinInfo>
      <Button>create a game</Button>
    </Wrapper>
  );
};
