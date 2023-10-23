import { SpringValue } from '@react-spring/web';
import { RefObject, useCallback, useEffect, useState } from 'react';
import { TimerStart, Wrapper } from '../Chart/Chart.styled';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useGetLongGameQuery } from 'services';
import { StatusesLong } from 'services/api/game';

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

export const Chart2 = ({ style, chartRef }: ChartProps) => {
  const [chartData, setChartData] = useState([{ uv: 1 }, { uv: 1 }]);
  const [chartColor, setChartColor] = useState('rgba(49, 93, 241, 0.50)');
  const { data: dataLong } = useGetLongGameQuery(null, { pollingInterval: 100 });

  useEffect(() => {
    updateData();
  }, [dataLong?.coef]);

  useEffect(() => {
    if (!dataLong) return;

    switch (dataLong.status) {
      case StatusesLong.Run:
        break;

      case StatusesLong.Complete:
        setChartColor('rgba(255, 55, 95, 0.50)');

        break;

      case StatusesLong.Done:
        setChartData([{ uv: 1 }, { uv: 1 }]);
        setChartColor('rgba(49, 93, 241, 0.50)');

        break;

      default:
        break;
    }
  }, [dataLong?.status, dataLong?.timeUntilRound]);

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
        <TimerStart>
          {dataLong.status === StatusesLong.Run || dataLong.status === StatusesLong.Complete
            ? `${dataLong.coef}x`
            : `${dataLong.next_round}s`}
        </TimerStart>
      )}
    </Wrapper>
  );
};
