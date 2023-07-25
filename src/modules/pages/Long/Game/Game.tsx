import {
  Wrapper,
  GameBlock,
  InGameCount,
  InGameInfoText,
  InGameList,
  InGameTitle,
  Button,
  Form,
  Input,
  Lable,
  Icon,
  TransferBlock,
  TransferCount,
  TransferInfo,
  TransferWrap,
} from './Game.styled';
import { InGameDataType } from 'data/long';
import { criptoIcon } from 'constants/images';
import { useState, useEffect, FormEvent, useRef } from 'react';

interface GameProps {
  data: InGameDataType[];
}

export const Game = ({ data }: GameProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [margin, setMargin] = useState<number>(0);
  const [total, setTotal] = useState<string>('0.00');
  const amountRef = useRef<HTMLInputElement>(null);
  const marginRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!(amount && margin)) setTotal('0.00');
    else setTotal((amount * margin).toFixed(2));
  }, [amount, margin]);

  const handleChangeAmount = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setAmount(Number(value));
  };

  const handleChangeMargin = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setMargin(Number(value));
  };

  return (
    <Wrapper>
      <GameBlock>
        <InGameTitle>In Game</InGameTitle>
        <InGameList>
          {data.map(({ amount, criptoName }) => (
            <div key={criptoName}>
              <img src={criptoIcon[criptoName]} />
              <InGameInfoText>amount</InGameInfoText>
              <InGameCount>{amount}</InGameCount>
            </div>
          ))}
        </InGameList>
      </GameBlock>
      <TransferBlock>
        <TransferWrap>
          <TransferCount>0.00</TransferCount>
          <TransferInfo>in round</TransferInfo>
        </TransferWrap>
        <Icon />
        <TransferWrap>
          <TransferCount>0.00</TransferCount>
          <TransferInfo>win</TransferInfo>
        </TransferWrap>
      </TransferBlock>
      <GameBlock>
        <Form>
          <Lable>
            <span>bET</span>
            <Input
              ref={amountRef}
              placeholder="Amount"
              type="number"
              min={1}
              onChange={handleChangeAmount}
            />
          </Lable>
          <Lable>
            <span>long</span>
            <Input
              ref={marginRef}
              placeholder="4.0"
              type="number"
              min={1}
              onChange={handleChangeMargin}
            />
          </Lable>
          <Button>
            <span>START</span>
            <span>{total ? `${total}` : '0.00'}$</span>
          </Button>
        </Form>
      </GameBlock>
    </Wrapper>
  );
};
