import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { setLongInfo } from 'store/reducers/gameSlice';
import { userSelector } from 'store/selectors';

export const useRoundInfoSocket = (id: number): void => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(userSelector);

  useEffect(() => {
    const ws = new WebSocket(
      `${process.env.REACT_APP_WEB_SOCKET_URL}/game/round_info/${id}/ws?token=${token}`
    );

    ws.onopen = function () {
      console.log('ws opened');
    };

    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      try {
        dispatch(setLongInfo(json));
      } catch {
        throw new Error();
      }
    };

    return () => ws.close();
  }, []);
};
