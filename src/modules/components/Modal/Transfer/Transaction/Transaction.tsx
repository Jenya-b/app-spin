import { useEffect, useState } from 'react';

import { Form, Input, InputBlock, Lable, TransactionBtn } from './Transaction.styled';
import { useTranslation } from 'react-i18next';
import { Wallet } from 'services/api/wallet';

export enum TransactionParameter {
  SEND = 'send',
  RECIEVE = 'recieve',
}

interface TransactionProps {
  wallet: Wallet;
  transactionParameter: TransactionParameter;
}

export const Transaction = ({ transactionParameter, wallet }: TransactionProps) => {
  const { t } = useTranslation();
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (wallet.address === null) {
      setAddress('');
      return;
    }
    setAddress(wallet.address);
  }, [wallet]);

  return (
    <Form>
      <InputBlock>
        <Lable>
          {t(
            transactionParameter === TransactionParameter.SEND
              ? 'walletNumber'
              : 'yourPersonalWalletNumber'
          )}
          <Input
            placeholder={t('enterWalletNumber')}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Lable>
        <Lable>
          {t('amountInCrypto')}
          <Input placeholder={t('enter')} />
        </Lable>
        <Lable>
          {t('amountInValue')}
          <Input placeholder={t('enter')} />
        </Lable>
        <Lable>
          {t('commission')}
          <Input disabled placeholder="3% - $11" />
        </Lable>
      </InputBlock>
      <TransactionBtn>{t('makeTransaction')}</TransactionBtn>
    </Form>
  );
};
