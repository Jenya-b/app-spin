import { InGameDataType } from 'data/long';
import { Wrapper, Count, InfoText, List, Title } from './InGame.styled';
import { cryptoIcon } from 'constants/images';
import { useTranslation } from 'react-i18next';

interface InGameProps {
  data: InGameDataType[];
}

export const InGame = ({ data }: InGameProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('inGame')}</Title>
      <List>
        {data.map(({ amount, cryptoName }) => (
          <div key={cryptoName}>
            <img src={cryptoIcon[cryptoName]} />
            <InfoText>{t('amount')}</InfoText>
            <Count>{amount}</Count>
          </div>
        ))}
      </List>
    </Wrapper>
  );
};
