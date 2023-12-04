import { InGameDataType } from 'data/long';
import { Wrapper, Count, InfoText, List, Title } from './InGame.styled';
import { cryptoIcon } from 'constants/images';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store';
import { userSelector } from 'store/selectors';
import { CriptoEnum } from 'store/reducers/currencySlice';

interface InGameProps {
  data: InGameDataType[];
}

export const InGame = ({ data }: InGameProps) => {
  const { balance } = useAppSelector(userSelector);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('inGame')}</Title>
      <List>
        {balance !== null &&
          Object.entries(balance).map(([cryptoName, amount]) => (
            <div
              key={cryptoName}
              style={{
                padding: '2px',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            >
              <img src={cryptoIcon[cryptoName as CriptoEnum]} />
              <InfoText>{t('amount')}</InfoText>
              <Count>{amount.val - amount.ingame}</Count>
            </div>
          ))}
      </List>
    </Wrapper>
  );
};
