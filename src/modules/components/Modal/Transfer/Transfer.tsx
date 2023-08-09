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
import { cryptoIcon } from 'constants/images';
import { Transaction } from './Transaction/Transaction';
import { converterFontSize } from 'utils/converter';

interface TransferModalProps {
  closeModal: () => void;
}

export const TransferModal = ({ closeModal }: TransferModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [transactionParam, setTransactionParam] = useState('');
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

  const updateVisibleTransaction = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    if (
      (id === 'send' && transactionParam === 'recieve') ||
      (id === 'recieve' && transactionParam === 'send')
    ) {
      setTransactionParam(id);
    } else if (
      (id === 'send' && id !== transactionParam) ||
      (id === 'recieve' && id !== transactionParam)
    ) {
      setIsVisibleTransaction(true);
      setTransactionParam(id);
    } else if (
      (id === 'send' && id === transactionParam) ||
      (id === 'recieve' && id === transactionParam)
    ) {
      setIsVisibleTransaction(false);
      setTransactionParam('');
    }
  };

  return (
    <StyledWrapp>
      <CloseModalBtn onClick={closeModal} />
      <Title>{t('transfer')}</Title>
      <Subtitle>{t('exchangeRate')}</Subtitle>
      <PriceWrap>
        {transfer.map(({ cryptoName, price }) => (
          <Price
            id={cryptoName}
            active={selectedCurrency === cryptoName}
            onClick={handleClickCurrency}
            key={cryptoName}
          >
            <CriptoName>
              <Icon src={cryptoIcon[`${cryptoName}`]} />
              {cryptoName}
            </CriptoName>
            <InfoText>{t('price')}</InfoText>
            <Count>${price}</Count>
          </Price>
        ))}
      </PriceWrap>
      <Controls>
        <SendBtn
          id="send"
          isactive={transactionParam === 'send'}
          onClick={updateVisibleTransaction}
        >
          {t('send')}
        </SendBtn>
        <RecieveBtn
          id="recieve"
          isactive={transactionParam === 'recieve'}
          onClick={updateVisibleTransaction}
        >
          {t('recieve')}
        </RecieveBtn>
      </Controls>
      <TransactionBlock ref={transactionRef} style={{ ...springs }}>
        <Transaction
          walletLabel={t(transactionParam === 'send' ? 'walletNumber' : 'yourPersonalWalletNumber')}
          walletPlaceholder={t('enterWalletNumber')}
        />
      </TransactionBlock>
    </StyledWrapp>
  );
};
