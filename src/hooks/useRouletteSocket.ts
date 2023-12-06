import { useEffect } from 'react';
import { useAppSelector } from 'store';
import { userSelector } from 'store/selectors';

export const useRouletteSocket = (id: number): void => {
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
      } catch {
        throw new Error();
      }
    };

    return () => ws.close();
  }, []);
};
