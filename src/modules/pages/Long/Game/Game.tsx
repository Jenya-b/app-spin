import { useTranslation } from 'react-i18next';

import {
  Wrapper,
  Icon,
  TransferBlock,
  TransferCount,
  TransferInfo,
  TransferWrap,
} from './Game.styled';
import { InGameDataType } from 'data/long';
import { InGame } from 'modules/components/InGame/InGame';
import { Bet } from 'modules/components/Bet/Bet';

interface GameProps {
  data: InGameDataType[];
}

export const Game = ({ data }: GameProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <InGame data={data} />
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
      <Bet />
    </Wrapper>
  );
};
