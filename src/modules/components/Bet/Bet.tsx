import { FormEvent, useEffect, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper, Form, Input, Lable, Button, criptoListCss } from './Bet.styled';
import {
  useCrashBetMutation,
  useLazyCrashStopQuery,
  useLazyGetBalanceQuery,
  useLazyHasLongGameQuery,
} from 'services';
import { Notification } from '../Notification/Notification';
import { useAppDispatch, useAppSelector } from 'store';
import { gameSelector, notifySelector, userSelector } from 'store/selectors';
import { openNotify } from 'store/reducers/notifySlice';
import { alertMessage } from 'constants/notify';
import { Loader } from '../Loader/Loader';
import { CrashStatuses, StatusesLong } from 'services/api/crash';
import { setIsLongGame } from 'store/reducers/gameSlice';
import { List } from '../List/List';
import { CryptoBtn } from '../CryptoBtn/CryptoBtn';
import { CriptoEnum } from 'store/reducers/currencySlice';
import { cryptoArr } from 'constants/crypto';

export const Bet = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [bet, setBet] = useState('');
  const [long, setLong] = useState('');
  const [criptoActive, setCriptoActive] = useState<CriptoEnum>(cryptoArr[0]);
  const { currentUser, isAuth } = useAppSelector(userSelector);
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
  const [updateBalance] = useLazyGetBalanceQuery();

  useEffect(() => {
    if (!(isSuccessBet && dataBet)) {
      return;
    }

    switch (dataBet.result) {
      case CrashStatuses.OK:
        dispatch(openNotify(alertMessage.crashSuccess));
        dispatch(setIsLongGame(true));
        updateUserBalance();
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
      updateUserBalance();
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
    updateUserBalance();
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

  const updateUserBalance = () => {
    if (!isAuth) {
      return;
    }

    updateBalance(null);
  };

  const placeBet = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!bet) {
      return;
    }

    fetchBet({
      bet: Number(bet),
      coin: criptoActive,
      coef: Number(long),
    });
  };

  const stopBet = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchStop(null);
  };

  const handleActiveCripto = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id as CriptoEnum;

    setCriptoActive(id);
  };

  const renderItem = (item: CriptoEnum) => (
    <CryptoBtn
      criptoActive={criptoActive}
      cryptoName={item}
      handleActiveCripto={handleActiveCripto}
    />
  );

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
          <span>{t('auto')}</span>
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
        <List renderItem={renderItem} data={cryptoArr} styles={criptoListCss} />
      </Form>
    </Wrapper>
  );
};
