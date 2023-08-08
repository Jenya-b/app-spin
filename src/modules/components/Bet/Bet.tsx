import { useTranslation } from 'react-i18next';
import { Wrapper, Form, Input, Lable, Button } from './Bet.styled';

export const Bet = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Form>
        <Lable>
          <span>{t('bet')}</span>
          <Input placeholder={t('amount')} type="number" min={1} />
        </Lable>
        <Lable>
          <span>{t('long')}</span>
          <Input placeholder="4.0" type="number" min={1} />
        </Lable>
        <Button>{t('start')}</Button>
      </Form>
    </Wrapper>
  );
};
