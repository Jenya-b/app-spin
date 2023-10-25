import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { List } from 'modules/components/List/List';
import {
  Wrapper,
  TransferBlock,
  criptoListCss,
  InGameUser,
  Input,
  InputWrap,
  Label,
  Pointer,
  Roulette,
  Slide,
  Slider,
  RouletteWrap,
  HistoryGame,
  InfoBlock,
  LastGame,
  Time,
  Timer,
  TimerText,
  LastGameTitle,
  LastGameWrap,
  LastGameItem,
} from './Game.styled';
import { cryptoArr } from 'constants/crypto';
import { historyRoulette, lastResult, rouletteSlider } from 'data/roulette';
import { CryptoBtn } from 'modules/components/CryptoBtn/CryptoBtn';
import { useResize } from 'hooks/useResize';
import { CriptoEnum } from 'store/reducers/currencySlice';

export const Game = () => {
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
        <Roulette>
          <RouletteWrap>
            <Pointer />
            <Slider>
              {rouletteSlider.map((item, i) => (
                <Slide key={i} className={item} />
              ))}
            </Slider>
          </RouletteWrap>
        </Roulette>
        <InfoBlock>
          <LastGame>
            <LastGameTitle>{t('last')} 100</LastGameTitle>
            <LastGameWrap>
              {lastResult.map(({ count, name }) => (
                <LastGameItem className={name} key={name}>
                  {count}
                </LastGameItem>
              ))}
            </LastGameWrap>
          </LastGame>
          <Timer>
            <Time>10 : 00</Time>
            <TimerText>{t('start')}</TimerText>
          </Timer>
          <HistoryGame>
            {historyRoulette.map((item, i) => (
              <div className={item} key={i} />
            ))}
          </HistoryGame>
        </InfoBlock>
      </div>
      <TransferBlock>
        {width >= 767 && <List renderItem={renderItem} data={cryptoArr} styles={criptoListCss} />}
        <InGameUser>16 {t('gamers')}, 150$</InGameUser>
        {width >= 767 && (
          <InputWrap>
            <Label>
              {t('amount')}:
              <Input />
            </Label>
            <Label>
              {t('bet')}:
              <Input />
            </Label>
          </InputWrap>
        )}
      </TransferBlock>
    </Wrapper>
  );
};
