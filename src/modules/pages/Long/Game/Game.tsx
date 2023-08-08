import { useTranslation } from 'react-i18next';

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

interface GameProps {
  data: InGameDataType[];
}

export const Game = ({ data }: GameProps) => {
  const { t } = useTranslation();

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
            <Input placeholder={t('amount')} type="number" min={1} />
          </Lable>
          <Lable>
            <span>{t('long')}</span>
            <Input placeholder="4.0" type="number" min={1} />
          </Lable>
          <Button>{t('start')}</Button>
        </Form>
      </GameBlock>
    </Wrapper>
  );
};
