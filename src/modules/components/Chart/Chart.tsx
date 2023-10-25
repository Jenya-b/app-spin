import { RefObject, useCallback, useEffect, useState } from 'react';
import { SpringValue } from '@react-spring/web';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Timer, Wrapper } from './Chart.styled';
import { StatusesLong, LongResponse } from 'services/api/game';

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
  const [chartData, setChartData] = useState([{ uv: 1 }, { uv: 1 }]);
  const [chartColor, setChartColor] = useState('rgba(49, 93, 241, 0.50)');
  const [dataLong, setDataLong] = useState<LongResponse>();

  useEffect(() => {
    const ws = new WebSocket(`${process.env.REACT_APP_WEB_SOCKET_URL}/game/crash/last_round/ws`);

    ws.onopen = function () {
      console.log('ws opened');
    };

    ws.onmessage = function (event) {
      setDataLong(JSON.parse(event.data));
    };
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      try {
        setDataLong(json);
      } catch {
        throw new Error();
      }
    };

    return () => ws.close();
  }, []);

  useEffect(() => {
    updateData();
  }, [dataLong?.coef]);

  useEffect(() => {
    if (!dataLong) return;

    switch (dataLong.status) {
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
  }, [dataLong?.status]);

  const updateData = useCallback(() => {
    if (!dataLong) return;
    setChartData((state) =>
      state.map((item, index) => {
        if (index === 1) {
          return { uv: dataLong.coef };
        }
        return item;
      })
    );
  }, [dataLong?.coef]);

  return (
    <Wrapper ref={chartRef} style={style}>
      <ResponsiveContainer width="99%">
        <AreaChart data={chartData} margin={{ top: 0, right: 0, left: -10, bottom: -20 }}>
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
            stroke={chartColor}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
      {dataLong && (
        <Timer>
          {dataLong.status === StatusesLong.Run || dataLong.status === StatusesLong.Done
            ? `${dataLong.coef}x`
            : dataLong.status === StatusesLong.New && dataLong.next_round > 0
            ? `${dataLong.next_round}s`
            : ''}
        </Timer>
      )}
    </Wrapper>
  );
};
