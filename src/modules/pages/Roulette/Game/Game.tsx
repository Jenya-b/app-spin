import { useState, MouseEvent } from 'react';

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
import { criptoArr } from 'constants/cripto';
import { CriptoNameType } from 'interfaces/cripto';
import { historyRoulette, lastResult, rouletteSlider } from 'data/roulette';
import { CryptoBtn } from 'modules/components/CryptoBtn/CryptoBtn';

export const Game = () => {
  const [criptoActive, setCriptoActive] = useState<CriptoNameType>(criptoArr[0]);

  const renderItem = (item: CriptoNameType) => (
    <CryptoBtn
      criptoActive={criptoActive}
      cryptoName={item}
      handleActiveCripto={handleActiveCripto}
    />
  );

  const handleActiveCripto = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id as CriptoNameType;

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
            <LastGameTitle>last 100</LastGameTitle>
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
            <TimerText>start</TimerText>
          </Timer>
          <HistoryGame>
            {historyRoulette.map((item, i) => (
              <div className={item} key={i} />
            ))}
          </HistoryGame>
        </InfoBlock>
      </GameBlock>
      <TransferBlock>
        <List renderItem={renderItem} data={criptoArr} styles={criptoListCss} />
        <InputWrap>
          <InGameUser>16 gamers</InGameUser>
          <Label>
            amount:
            <Input />
          </Label>
        </InputWrap>
      </TransferBlock>
    </Wrapper>
  );
};
