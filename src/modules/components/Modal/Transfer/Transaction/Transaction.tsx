import { FormEvent, Fragment, useState } from 'react';

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

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputBlock>
        <Lable>
          {t(
            transactionParameter === TransactionParameter.SEND
              ? 'walletNumber'
              : 'yourPersonalWalletNumber'
          )}
          {transactionParameter === TransactionParameter.RECIEVE ? (
            <Input placeholder={t('enterWalletNumber')} value={wallet.address} disabled={true} />
          ) : (
            <Input
              placeholder={t('enterWalletNumber')}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          )}
        </Lable>
        {transactionParameter !== TransactionParameter.RECIEVE && (
          <Fragment>
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
          </Fragment>
        )}
      </InputBlock>
      <TransactionBtn>{t('makeTransaction')}</TransactionBtn>
    </Form>
  );
};
