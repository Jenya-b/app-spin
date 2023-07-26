import { memo } from 'react';

import { Form, Input, InputBlock, Lable, TransactionBtn } from './Transaction.styled';
import { useTranslation } from 'react-i18next';

interface TransactionProps {
  walletLabel: string;
  walletPlaceholder: string;
}

export const Transaction = memo(({ walletLabel, walletPlaceholder }: TransactionProps) => {
  const { t } = useTranslation();

  return (
    <Form>
      <InputBlock>
        <Lable>
          {walletLabel}
          <Input placeholder={walletPlaceholder} />
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
});
