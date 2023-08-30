import { useTranslation } from 'react-i18next';

import { Timer, Wrapper, Info, Button } from './CountDown.styled';
import { useCountDownTimer } from 'hooks/useCountDownTimer';

interface CountDownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountDown = ({ days, hours, minutes, seconds }: CountDownProps) => {
  const [d, h, m, s] = useCountDownTimer({ days, hours, minutes, seconds });
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Info>
        <div>{t('giveaway')}</div>
        <div>25 Spin</div>
        <div />
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
      <Button />
    </Wrapper>
  );
};
