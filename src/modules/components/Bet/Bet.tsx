import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper, Form, Input, Lable, Button } from './Bet.styled';
import { useCrashBetMutation } from 'services';
import { Notification } from '../Notification/Notification';
import { useAppDispatch, useAppSelector } from 'store';
import { currencySelector, notifySelector, userSelector } from 'store/selectors';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/notify';
import { Loader } from '../Loader/Loader';

export const Bet = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [bet, setBet] = useState('');
  const [long, setLong] = useState('');
  const { currentUser } = useAppSelector(userSelector);
  const { currency } = useAppSelector(currencySelector);
  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);
  const [fetchCrash, { data, isLoading, isSuccess }] = useCrashBetMutation();

  useEffect(() => {
    if (!(isSuccess && data)) {
      return;
    }

    switch (data.result) {
      case 'ok':
        dispatch(openNotify(alertMessage.crashSuccess));
        break;

      case 'fail':
        dispatch(openNotify(alertMessage.crashErrorRun));
        break;

      default:
        break;
    }
  }, [isSuccess]);

  const placeBet = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(bet && long && currentUser)) {
      return;
    }

    fetchCrash({
      bet: Number(bet),
      coin: currency,
      user_id: currentUser,
    });
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Notification isOpenNotify={isOpenNotify} notifyMessage={notifyMessage} />
      <Form onSubmit={placeBet}>
        <Lable>
          <span>{t('bet')}</span>
          <Input
            placeholder={t('amount')}
            type="number"
            min={1}
            value={bet}
            onChange={(e) => setBet(e.target.value)}
          />
        </Lable>
        <Lable>
          <span>{t('long')}</span>
          <Input
            placeholder="4.0"
            type="number"
            min={1}
            step={'any'}
            value={long}
            onChange={(e) => setLong(e.target.value)}
          />
        </Lable>
        <Button disabled={!currentUser}>{t('start')}</Button>
      </Form>
    </Wrapper>
  );
};
