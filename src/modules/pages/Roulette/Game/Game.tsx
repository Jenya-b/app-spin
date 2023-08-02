import { List } from 'modules/components/List/List';
import {
  Wrapper,
  GameBlock,
  TransferBlock,
  criptoListCss,
  ImageWrap,
  InGameUser,
  Input,
  InputWrap,
  Label,
  Pointer,
  Roulette,
  Slide,
  Slider,
  RouletteWrap,
} from './Game.styled';
import { criptoArr } from 'constants/cripto';
import { CriptoNameType } from 'interfaces/cripto';
import { criptoIcon } from 'constants/images';
import { useState, MouseEvent } from 'react';
import { rouletteSlider } from 'data/roulette';

export const Game = () => {
  const [criptoActive, setCriptoActive] = useState<CriptoNameType>(criptoArr[0]);

  const renderItem = (item: CriptoNameType) => (
    <ImageWrap
      id={item}
      className={item === criptoActive ? 'active' : ''}
      onClick={handleActiveCripto}
    >
      <img src={criptoIcon[item]} alt="" />
    </ImageWrap>
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
