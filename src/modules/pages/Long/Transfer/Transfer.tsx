import { useTranslation } from 'react-i18next';

import { Icon, TransferBlock, TransferCount, TransferInfo, TransferWrap } from './Transfer.styled';
import { InGameDataType } from 'data/long';
import { RateSelection } from 'modules/components/RateSelection/RateSelection';
import { useAppSelector } from 'store';
import { gameSelector } from 'store/selectors';

interface GameProps {
  data: InGameDataType[];
}

export const Transfer = ({ data }: GameProps) => {
  const { t } = useTranslation();
  const {
    longInfo: { my_bet, round_info },
  } = useAppSelector(gameSelector);

  return (
    <RateSelection data={data}>
      <TransferBlock>
        <TransferWrap>
          <TransferCount>{my_bet !== null ? my_bet.value : '0.00'}</TransferCount>
          <TransferInfo>{t('inRound')}</TransferInfo>
        </TransferWrap>
        <Icon />
        <TransferWrap>
          <TransferCount>
            {my_bet !== null && round_info !== null
              ? (my_bet.value * Number(round_info.coef)).toFixed(2)
              : '0.00'}
          </TransferCount>
          <TransferInfo>{t('win')}</TransferInfo>
        </TransferWrap>
      </TransferBlock>
    </RateSelection>
  );
};
