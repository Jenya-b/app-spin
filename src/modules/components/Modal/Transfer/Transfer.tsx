import { useTranslation } from 'react-i18next';
import { useState, MouseEvent, useRef } from 'react';
import { useSpring } from '@react-spring/web';

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
  TransactionBlock,
} from './Transfer.styled';
import { criptoIcon } from 'constants/images';
import { Transaction } from './Transaction/Transaction';
import { converterFontSize } from 'utils/converter';

interface TransferModalProps {
  closeModal: () => void;
}

export const TransferModal = ({ closeModal }: TransferModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [isVisibleTransaction, setIsVisibleTransaction] = useState(false);
  const transactionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const springs = useSpring({
    immediate: !transactionRef.current,
    from: { height: '0px', marginTop: '0px', opacity: 0 },
    to: {
      height: `${converterFontSize(window.innerWidth, 245)}px`,
      marginTop: `${converterFontSize(window.innerWidth, 26)}px`,
      opacity: 1,
    },
    reverse: !isVisibleTransaction,
    config: { duration: 500 },
  });

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
            <InfoText>{t('price')}</InfoText>
            <Count>${price}</Count>
          </Price>
        ))}
      </PriceWrap>
      <Controls>
        <SendBtn
          isactive={isVisibleTransaction}
          onClick={() => setIsVisibleTransaction(!isVisibleTransaction)}
        >
          {t('send')}
        </SendBtn>
        <RecieveBtn>{t('recieve')}</RecieveBtn>
      </Controls>
      <TransactionBlock ref={transactionRef} style={{ ...springs }}>
        <Transaction walletLabel={t('walletNumber')} walletPlaceholder={t('enterWalletNumber')} />
      </TransactionBlock>
    </StyledWrapp>
  );
};
