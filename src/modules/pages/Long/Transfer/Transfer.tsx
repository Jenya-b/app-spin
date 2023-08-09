import { useTranslation } from 'react-i18next';

import { Icon, TransferBlock, TransferCount, TransferInfo, TransferWrap } from './Transfer.styled';
import { InGameDataType } from 'data/long';
import { RateSelection } from 'modules/components/RateSelection/RateSelection';

interface GameProps {
  data: InGameDataType[];
}

export const Transfer = ({ data }: GameProps) => {
  const { t } = useTranslation();

  return (
    <RateSelection data={data}>
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
    </RateSelection>
  );
};
