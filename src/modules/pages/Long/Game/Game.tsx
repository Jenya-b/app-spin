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
import { cryptoIcon } from 'constants/images';
import { useState, useEffect, FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface GameProps {
  data: InGameDataType[];
}

export const Game = ({ data }: GameProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [margin, setMargin] = useState<number>(0);
  const [total, setTotal] = useState<string>('0.00');
  const amountRef = useRef<HTMLInputElement>(null);
  const marginRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

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
        <InGameTitle>{t('inGame')}</InGameTitle>
        <InGameList>
          {data.map(({ amount, cryptoName }) => (
            <div key={cryptoName}>
              <img src={cryptoIcon[cryptoName]} />
              <InGameInfoText>{t('amount')}</InGameInfoText>
              <InGameCount>{amount}</InGameCount>
            </div>
          ))}
        </InGameList>
      </GameBlock>
      <TransferBlock>
        <TransferWrap>
          <TransferCount>0.00</TransferCount>
          <TransferInfo>{t('inRound')}</TransferInfo>
        </TransferWrap>
        <Icon />
        <TransferWrap>
          <TransferCount>0.00</TransferCount>
          <TransferInfo>{t('win')}</TransferInfo>
        </TransferWrap>
      </TransferBlock>
      <GameBlock>
        <Form>
          <Lable>
            <span>{t('bet')}</span>
            <Input
              ref={amountRef}
              placeholder={t('amount')}
              type="number"
              min={1}
              onChange={handleChangeAmount}
            />
          </Lable>
          <Lable>
            <span>{t('long')}</span>
            <Input
              ref={marginRef}
              placeholder="4.0"
              type="number"
              min={1}
              onChange={handleChangeMargin}
            />
          </Lable>
          <Button>{t('start')}</Button>
        </Form>
      </GameBlock>
    </Wrapper>
  );
};
