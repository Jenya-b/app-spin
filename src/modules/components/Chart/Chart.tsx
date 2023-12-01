import { RefObject, useCallback, useEffect, useState } from 'react';
import { SpringValue } from '@react-spring/web';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Timer, Wrapper } from './Chart.styled';
import { StatusesLong } from 'services/api/crash';
import { useAppDispatch, useAppSelector } from 'store';
import { setLongInfo, setStatusesLongGame } from 'store/reducers/gameSlice';
import { converterForTimer } from 'utils/converter';
import { gameSelector } from 'store/selectors';

interface ChartProps {
  chartRef?:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;
  style: {
    height: SpringValue<string>;
    opacity: SpringValue<number>;
    marginBottom: SpringValue<string>;
    borderWidth: SpringValue<string>;
  };
}

export const Chart = ({ style, chartRef }: ChartProps) => {
  const dispatch = useAppDispatch();
  const [chartData, setChartData] = useState([{ uv: 1 }, { uv: 1 }]);
  const [chartColor, setChartColor] = useState('rgba(49, 93, 241, 0.50)');
  const {
    longInfo: { round_info },
  } = useAppSelector(gameSelector);

  useEffect(() => {
    const ws = new WebSocket(`${process.env.REACT_APP_WEB_SOCKET_URL}/game/last_round/1/ws`);

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

  useEffect(() => {
    updateData();
  }, [round_info?.coef]);

  useEffect(() => {
    if (!round_info) return;

    dispatch(setStatusesLongGame(round_info.status));

    switch (round_info.status) {
      case StatusesLong.Run:
        break;

      case StatusesLong.Done:
        setChartColor('rgba(255, 55, 95, 0.50)');

        break;

      case StatusesLong.New:
        setChartData([{ uv: 1 }, { uv: 1 }]);
        setChartColor('rgba(49, 93, 241, 0.50)');

        break;

      default:
        break;
    }
  }, [round_info?.status]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCustomizedDot = (props: any) => {
    const { cx, cy } = props;

    return (
      <svg x={cx - 4} y={cy - 4} width="8" height="8" viewBox="0 0 8 8" fill="none">
        <circle
          cx="4"
          cy="4"
          r="4"
          fill={
            round_info !== null && round_info.status === StatusesLong.Done
              ? 'rgba(255, 55, 95, 1)'
              : 'rgba(49, 93, 241, 1)'
          }
        />
        <circle cx="4" cy="4" r="3.5" stroke="white" strokeOpacity="0.25" />
      </svg>
    );
  };

  const updateData = useCallback(() => {
    if (!round_info) return;
    setChartData((state) =>
      state.map((item, index) => {
        if (index === 1) {
          return { uv: Number(round_info.coef) };
        }
        return item;
      })
    );
  }, [round_info?.coef]);

  return (
    <Wrapper ref={chartRef} style={style}>
      <ResponsiveContainer width="99%">
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: -20 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor={chartColor} stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <YAxis domain={[1, 5]} tickFormatter={(value) => value.toFixed(2)} />
          <XAxis />
          <CartesianGrid strokeDasharray="2 6" />
          <Area
            type="monotone"
            dataKey="uv"
            strokeWidth={3}
            stroke={
              round_info !== null && round_info.status === StatusesLong.Done
                ? 'rgba(255, 55, 95, 0.8)'
                : 'rgba(49, 93, 241, 0.8)'
            }
            fillOpacity={1}
            fill="url(#colorUv)"
            dot={(e) => renderCustomizedDot(e)}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
      {round_info && (
        <Timer>
          {round_info.status === StatusesLong.Run || round_info.status === StatusesLong.Done ? (
            <>
              {converterForTimer(round_info.coef).map((item, i) => (
                <p key={i}>{item}</p>
              ))}
              <p>X</p>
            </>
          ) : round_info.status === StatusesLong.New && round_info.next_round > 0 ? (
            <>
              {converterForTimer(String(round_info.next_round), true).map((item, i) => (
                <p style={{ color: '#f7d085' }} key={i}>
                  {item}
                </p>
              ))}
              <p style={{ color: '#f7d085' }}>s</p>
            </>
          ) : (
            ''
          )}
        </Timer>
      )}
    </Wrapper>
  );
};
