import { useEffect, useState } from 'react';

export const useCountDownTimer = ({ days = 0, hours = 0, minutes = 0, seconds = 0 }) => {
  const [over, setOver] = useState(false);
  const [[d, h, m, s], setTime] = useState([days, hours, minutes, seconds]);

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

  return [d, h, m, s];
};
