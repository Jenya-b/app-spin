import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper, Form, Input, Lable, Button } from './Bet.styled';
import { useCrashBetMutation, useLazyCrashStopQuery, useLazyHasLongGameQuery } from 'services';
import { Notification } from '../Notification/Notification';
import { useAppDispatch, useAppSelector } from 'store';
import { currencySelector, gameSelector, notifySelector, userSelector } from 'store/selectors';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/notify';
import { Loader } from '../Loader/Loader';
import { CrashStatuses, StatusesLong } from 'services/api/crash';
import { setIsLongGame } from 'store/reducers/gameSlice';

export const Bet = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [bet, setBet] = useState('');
  const [long, setLong] = useState('');
  const { currentUser } = useAppSelector(userSelector);
  const { currency } = useAppSelector(currencySelector);
  const { isLongGameUser, statusesLongGame } = useAppSelector(gameSelector);
  const { isOpenNotify, notifyMessage } = useAppSelector(notifySelector);
  const [fetchBet, { data: dataBet, isLoading: isLoadingBet, isSuccess: isSuccessBet }] =
    useCrashBetMutation();
  const [fetchStop, { data: dataStop, isLoading: isLoadingStop, isSuccess: isSuccessStop }] =
    useLazyCrashStopQuery();
  const [
    fetchHasGame,
    { data: dataIsGame, isLoading: isLoadingIsGame, isSuccess: isSuccessIsGame },
  ] = useLazyHasLongGameQuery();

  useEffect(() => {
    if (!(isSuccessBet && dataBet)) {
      return;
    }

    switch (dataBet.result) {
      case CrashStatuses.OK:
        dispatch(openNotify(alertMessage.crashSuccess));
        dispatch(setIsLongGame(true));
        break;

      case CrashStatuses.FAIL:
        dispatch(openNotify({ message: dataBet.info as string, type: 'error' }));
        break;

      default:
        break;
    }
  }, [isSuccessBet]);

  useEffect(() => {
    if (isSuccessStop) {
      dispatch(setIsLongGame(false));
    }
  }, [isSuccessStop]);

  useEffect(() => {
    switch (statusesLongGame) {
      case StatusesLong.Done:
        dispatch(setIsLongGame(false));
        break;

      default:
        break;
    }
  }, [statusesLongGame]);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    fetchHasGame(null);
  }, [currentUser]);

  useEffect(() => {
    if (!(isSuccessIsGame && dataIsGame)) {
      return;
    }

    switch (dataIsGame.result) {
      case CrashStatuses.OK:
        dispatch(setIsLongGame(true));

        break;

      case CrashStatuses.FAIL:
        dispatch(setIsLongGame(false));
        break;

      default:
        break;
    }
  }, [isSuccessIsGame]);

  const placeBet = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!bet) {
      return;
    }

    fetchBet({
      bet: Number(bet),
      coin: currency,
      coef: Number(long),
    });
  };

  const stopBet = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchStop(null);
  };

  return (
    <Wrapper>
      {isLoadingBet && <Loader />}
      <Notification isOpenNotify={isOpenNotify} notifyMessage={notifyMessage} />
      <Form onSubmit={isLongGameUser ? stopBet : placeBet}>
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
        <Button disabled={!currentUser}>{t(isLongGameUser ? 'stop' : 'start')}</Button>
      </Form>
    </Wrapper>
  );
};
