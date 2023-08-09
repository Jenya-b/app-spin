import { useTranslation } from 'react-i18next';

import { InGameDataType } from 'data/long';
import { RateSelection } from 'modules/components/RateSelection/RateSelection';
import { Controls, DownBtn, UpBtn } from './Transfer.styled';
import { down, up } from 'constants/images';

interface GameProps {
  data: InGameDataType[];
}

export const Transfer = ({ data }: GameProps) => {
  const { t } = useTranslation();

  return (
    <RateSelection data={data}>
      <Controls>
        <UpBtn>
          <img src={up} />
          <p>{t('up')}</p>
        </UpBtn>
        <DownBtn>
          <img src={down} />
          <p>{t('down')}</p>
        </DownBtn>
      </Controls>
    </RateSelection>
  );
};
