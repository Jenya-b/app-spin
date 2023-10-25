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
import { cryptoArr } from 'constants/crypto';
import { List } from 'modules/components/List/List';
import { CryptoBtn } from 'modules/components/CryptoBtn/CryptoBtn';
import { InGame } from 'modules/components/InGame/InGame';
import { inGameData } from 'data/long';
import { useResize } from 'hooks/useResize';
import { CriptoEnum } from 'store/reducers/currencySlice';

export const CreateGameBlock = () => {
  const [criptoActive, setCriptoActive] = useState<CriptoEnum>(cryptoArr[0]);
  const { t } = useTranslation();
  const [width] = useResize();

  const renderItem = (item: CriptoEnum) => (
    <CryptoBtn
      criptoActive={criptoActive}
      cryptoName={item}
      handleActiveCripto={handleActiveCripto}
    />
  );

  const handleActiveCripto = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id as CriptoEnum;

    setCriptoActive(id);
  };

  return (
    <Wrapper>
      <div>
        <Lable>
          <span>{t('bet')}</span>
          <Input placeholder={t('amount')} />
        </Lable>
        {width <= 650 ? (
          <InGame data={inGameData} />
        ) : (
          <List renderItem={renderItem} data={cryptoArr} styles={criptoListCss} />
        )}
      </div>
      <CoinInfo>
        <ImgWrap>
          <img src={coinBtc} alt="btc" />
        </ImgWrap>
        <ChooseCoin>
          <p>{t('chooseCoin')}</p>
          <p>bitcoin {t('or')} etherium</p>
        </ChooseCoin>
        <ImgWrap>
          <img src={coinEth} alt="eth" />
        </ImgWrap>
      </CoinInfo>
      <Button>{t('createGame')}</Button>
    </Wrapper>
  );
};
