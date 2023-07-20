import { useTranslation } from 'react-i18next';
import { useState, MouseEvent } from 'react';

import { CloseModalBtn, Subtitle, Title } from '../Modal.styled';
import { transfer } from 'data/wallet';
import {
  StyledWrapp,
  PriceWrap,
  Count,
  CriptoName,
  Icon,
  InfoText,
  Price,
  Controls,
  RecieveBtn,
  SendBtn,
} from './Transfer.styled';
import { criptoIcon } from 'constants/images';

interface TransferModalProps {
  closeModal: () => void;
}

export const TransferModal = ({ closeModal }: TransferModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const { t } = useTranslation();

  const handleClickCurrency = (event: MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;

    if (!id) return;

    if (id === selectedCurrency) setSelectedCurrency('');
    else setSelectedCurrency(id);
  };

  return (
    <StyledWrapp>
      <CloseModalBtn onClick={closeModal} />
      <Title>{t('transfer')}</Title>
      <Subtitle>{t('exchangeRate')}</Subtitle>
      <PriceWrap>
        {transfer.map(({ criptoName, price }) => (
          <Price
            id={criptoName}
            active={selectedCurrency === criptoName}
            onClick={handleClickCurrency}
            key={criptoName}
          >
            <CriptoName>
              <Icon src={criptoIcon[`${criptoName}`]} />
              {criptoName}
            </CriptoName>
            <InfoText>price</InfoText>
            <Count>${price}</Count>
          </Price>
        ))}
      </PriceWrap>
      <Controls>
        <SendBtn>SEND</SendBtn>
        <RecieveBtn>RECIEVE</RecieveBtn>
      </Controls>
    </StyledWrapp>
  );
};
