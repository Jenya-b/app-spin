import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Timer, Wrapper, Info } from './CountDown.styled';

interface CountDownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountDown = ({ days = 0, hours = 0, minutes = 0, seconds = 0 }: CountDownProps) => {
  const [over, setOver] = useState(false);
  const [[d, h, m, s], setTime] = useState([days, hours, minutes, seconds]);
  const { t } = useTranslation();

  const tick = () => {
    if (over) return;

    if (d === 0 && h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (h === 0 && m === 0 && s === 0) {
      setTime([d - 1, 23, 59, 59]);
    } else if (m === 0 && s === 0) {
      setTime([d, h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([d, h, m - 1, 59]);
    } else {
      setTime([d, h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <Wrapper>
      <Info>
        <div>{t('giveaway')}</div>
        <div>25 Spin</div>
        <div></div>
      </Info>
      <Timer>
        <span>{d.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{h.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{m.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{s.toString().padStart(2, '0')}</span>
      </Timer>
    </Wrapper>
  );
};
