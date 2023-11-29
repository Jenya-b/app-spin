import { useTranslation } from 'react-i18next';
import { useState, MouseEvent, useRef, useEffect } from 'react';
import { useSpring } from '@react-spring/web';

import { CloseModalBtn, Subtitle, Title } from '../Modal.styled';
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
import { Transaction, TransactionParameter } from './Transaction/Transaction';
import { converterFontSize } from 'utils/converter';
import { useAppSelector } from 'store';
import { userSelector } from 'store/selectors';
import { CriptoEnum } from 'store/reducers/currencySlice';
import { useLazyGetWalletQuery } from 'services';

interface TransferModalProps {
  closeModal: () => void;
}

export const TransferModal = ({ closeModal }: TransferModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [transactionParam, setTransactionParam] = useState('');
  const [isVisibleTransaction, setIsVisibleTransaction] = useState(false);
  const { balance } = useAppSelector(userSelector);
  const transactionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const [fetchGetWallet, { data: wallet }] = useLazyGetWalletQuery();

  useEffect(() => {
    if (!selectedCurrency) {
      return;
    }
    fetchGetWallet({ coin: selectedCurrency });
  }, [selectedCurrency]);

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
      (id === TransactionParameter.SEND && transactionParam === TransactionParameter.RECIEVE) ||
      (id === TransactionParameter.RECIEVE && transactionParam === TransactionParameter.SEND)
    ) {
      setTransactionParam(id);
    } else if (
      (id === TransactionParameter.SEND && id !== transactionParam) ||
      (id === TransactionParameter.RECIEVE && id !== transactionParam)
    ) {
      setIsVisibleTransaction(true);
      setTransactionParam(id);
    } else if (
      (id === TransactionParameter.SEND && id === transactionParam) ||
      (id === TransactionParameter.RECIEVE && id === transactionParam)
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
        {balance !== null &&
          Object.entries(balance).map(([cryptoName, price]) => (
            <Price
              id={cryptoName}
              active={selectedCurrency === cryptoName}
              onClick={handleClickCurrency}
              key={cryptoName}
            >
              <CriptoName>
                <Icon src={cryptoIcon[`${cryptoName as unknown as CriptoEnum}`]} />
                {cryptoName}
              </CriptoName>
              <InfoText>{t('price')}</InfoText>
              <Count>{price.val}</Count>
            </Price>
          ))}
      </PriceWrap>
      <Controls>
        <SendBtn
          id={TransactionParameter.SEND}
          isactive={transactionParam === TransactionParameter.SEND}
          onClick={updateVisibleTransaction}
        >
          {t('send')}
        </SendBtn>
        <RecieveBtn
          id={TransactionParameter.RECIEVE}
          isactive={transactionParam === TransactionParameter.RECIEVE}
          onClick={updateVisibleTransaction}
        >
          {t('recieve')}
        </RecieveBtn>
      </Controls>
      <TransactionBlock ref={transactionRef} style={{ ...springs }}>
        {transactionParam && wallet !== undefined && (
          <Transaction
            wallet={wallet}
            transactionParameter={transactionParam as TransactionParameter}
          />
        )}
      </TransactionBlock>
    </StyledWrapp>
  );
};
