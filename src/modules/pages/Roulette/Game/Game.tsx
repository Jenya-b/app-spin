import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { List } from 'modules/components/List/List';
import {
  Wrapper,
  GameBlock,
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
import { CryptoNameType } from 'interfaces/crypto';
import { historyRoulette, lastResult, rouletteSlider } from 'data/roulette';
import { CryptoBtn } from 'modules/components/CryptoBtn/CryptoBtn';

export const Game = () => {
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
      <GameBlock>
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
      </GameBlock>
      <TransferBlock>
        <List renderItem={renderItem} data={cryptoArr} styles={criptoListCss} />
        <InputWrap>
          <InGameUser>16 {t('gamers')}</InGameUser>
          <Label>
            {t('amount')}:
            <Input />
          </Label>
        </InputWrap>
      </TransferBlock>
    </Wrapper>
  );
};
