import { InGameDataType } from 'data/long';
import { Wrapper, Count, InfoText, List, Title } from './InGame.styled';
import { cryptoIcon } from 'constants/images';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store';
import { currencySelector, userSelector } from 'store/selectors';
import { CriptoEnum, changeCurrency } from 'store/reducers/currencySlice';

interface InGameProps {
  data: InGameDataType[];
}

export const InGame = ({ data }: InGameProps) => {
  const dispatch = useAppDispatch();
  const { currency } = useAppSelector(currencySelector);
  const { balance } = useAppSelector(userSelector);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('inGame')}</Title>
      <List>
        {balance !== null &&
          Object.entries(balance).map(([cryptoName, amount]) => (
            <div
              onClick={() => dispatch(changeCurrency(cryptoName as CriptoEnum))}
              key={cryptoName}
              style={{
                background: currency === cryptoName ? 'rgb(40, 41, 67)' : '',
                padding: '2px',
                borderRadius: '4px',
                cursor: 'pointer',
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
