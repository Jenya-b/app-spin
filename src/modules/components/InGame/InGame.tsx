import { InGameDataType } from 'data/long';
import { Wrapper, Count, InfoText, List, Title } from './InGame.styled';
import { cryptoIcon } from 'constants/images';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store';
import { currencySelector } from 'store/selectors';
import { changeCurrency } from 'store/reducers/currencySlice';

interface InGameProps {
  data: InGameDataType[];
}

export const InGame = ({ data }: InGameProps) => {
  const dispatch = useAppDispatch();
  const { currency } = useAppSelector(currencySelector);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('inGame')}</Title>
      <List>
        {data.map(({ amount, cryptoName }) => (
          <div
            onClick={() => dispatch(changeCurrency(cryptoName))}
            key={cryptoName}
            style={{
              background: currency === cryptoName ? 'rgb(40, 41, 67)' : '',
              padding: '2px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            <img src={cryptoIcon[cryptoName]} />
            <InfoText>{t('amount')}</InfoText>
            <Count>{amount}</Count>
          </div>
        ))}
      </List>
    </Wrapper>
  );
};
