import { memo } from 'react';

import { Form, Input, InputBlock, Lable, TransactionBtn } from './Transaction.styled';

interface TransactionProps {
  walletLabel: string;
  walletPlaceholder: string;
}

export const Transaction = memo(({ walletLabel, walletPlaceholder }: TransactionProps) => {
  return (
    <Form>
      <InputBlock>
        <Lable>
          {walletLabel}
          <Input placeholder={walletPlaceholder} />
        </Lable>
        <Lable>
          amount in crypto
          <Input placeholder="Enter" />
        </Lable>
        <Lable>
          amount in value
          <Input placeholder="Enter" />
        </Lable>
        <Lable>
          Commission
          <Input disabled placeholder="3% - $11" />
        </Lable>
      </InputBlock>
      <TransactionBtn>make transaction</TransactionBtn>
    </Form>
  );
});
