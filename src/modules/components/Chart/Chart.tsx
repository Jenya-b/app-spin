import { RefObject, useEffect, useRef, useState } from 'react';
import { SpringValue, update } from '@react-spring/web';
import * as d3 from 'd3';

import { Graph, Lines, Svg, TimerStart, Wrapper, TimerEnd } from './Chart.styled';

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

const MS = 100;
const START_SEC = 10;
const MIN_SEC = 1.01;
const MAX_SEC = 10;

const height = 138;
const width =
  window.innerWidth >= 3000
    ? 353
    : window.innerWidth >= 2800
    ? 353
    : window.innerWidth >= 2600
    ? 353
    : window.innerWidth >= 2400
    ? 276
    : window.innerWidth >= 2200
    ? 276
    : window.innerWidth >= 2000
    ? 276
    : 246;
const paddingTop = 7;
const paddingBottom = 7;
const paddingLeft = 40;

export const Chart = ({ style, chartRef }: ChartProps) => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [timerStart, setTimerStart] = useState(START_SEC);
  const [timerEnd, setTimerEnd] = useState(MIN_SEC * MS);
  const [randomNum, setRandomNum] = useState<number>();

  const linesRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (!timerStart) {
      setRandomNum(getRandomArbitrary(MIN_SEC * MS, MAX_SEC * MS));
      return;
    }
    const timeout = setTimeout(updateTimerStart, 1000);
    return () => clearTimeout(timeout);
  }, [timerStart]);

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    if (timerEnd >= 400 && timerEnd === data[data.length - 2] * 100) {
      setData((state) => [...state, data[data.length - 1] + 1]);
    }
  }, [timerEnd, data]);

  useEffect(() => {
    if (!randomNum || timerEnd >= randomNum) return;
    const timeout = setTimeout(updateTimerEnd, 100);
    return () => clearTimeout(timeout);
  }, [randomNum, timerEnd]);

  useEffect(() => {
    d3.select(linesRef.current)
      .selectAll('div')
      .data(data)
      .join(
        (enter) =>
          enter
            .append('div')
            .text(function (d: number) {
              return `${d}.00X`;
            })
            .style('transform', function (d, i) {
              if (i > 4) {
                return `translate(0px,${height - 7 - (height / 3) * 4}px)`;
              }

              return `translate(0px,${height - 7 - (height / 3) * i}px)`;
            })
            .classed('line', true),
        (update) =>
          update
            .transition()
            .easeVarying(() => d3.easePolyIn.exponent(1))
            .style('transform', function (d, i, arr) {
              return `translate(0px,${height - 7 - (height / 3) * i + (arr.length - 5) * 46}px)`;
            })
            .duration(32500 / 3)
      );
  }, [data]);

  useEffect(() => {
    if (!randomNum) return;

    const polygonHeight =
      randomNum >= 400
        ? 1
        : height -
          paddingBottom -
          ((height - paddingBottom - paddingTop) * (randomNum - 100)) / 300;

    const duration = randomNum >= 400 ? 32500 : (32500 / 300) * (randomNum - 100);

    if (!polygonHeight || !duration) return;

    const svg = d3.select(svgRef.current);

    svg
      .select('polygon')
      .transition()
      .easeVarying(() => d3.easePolyIn.exponent(1))
      .attr(
        'points',
        `${paddingLeft},${height} 
        ${width},${height} 
        ${width},${polygonHeight}`
      )
      .duration(duration);

    svg
      .select('circle')
      .transition()
      .easeVarying(() => d3.easePolyIn.exponent(1))
      .attr('cy', polygonHeight)
      .duration(duration);

    svg
      .select('line')
      .transition()
      .easeVarying(() => d3.easePolyIn.exponent(1))
      .attr('y2', polygonHeight)
      .duration(duration);
  }, [randomNum]);

  const updateTimerStart = () => setTimerStart((state) => state - 1);

  const updateTimerEnd = () => setTimerEnd((state) => state + 1);

  return (
    <Wrapper ref={chartRef} style={style}>
      <Graph>
        <Lines ref={linesRef} />
        <Svg ref={svgRef}>
          <polygon
            fill={randomNum === timerEnd ? 'rgba(255, 55, 95, 0.50)' : 'rgba(49, 93, 241, 0.50)'}
            points={`
              ${paddingLeft},${height} 
              ${width},${height} 
              ${width},${height}
            `}
          />
          <g transform="translate(0,0)">
            <circle
              className={'circle'}
              r={5}
              cx={width}
              cy={height}
              fill={randomNum === timerEnd ? '#FF375F' : '#315DF1'}
            />
            <line
              x1={paddingLeft}
              y1={height}
              x2={width}
              y2={height}
              strokeWidth="2"
              stroke={randomNum === timerEnd ? '#FF375F' : '#315DF1'}
            />
            <circle
              className={'circle'}
              r={5}
              cx={paddingLeft}
              cy={height}
              fill={randomNum === timerEnd ? '#FF375F' : '#315DF1'}
            />
          </g>
        </Svg>
        <TimerStart>{!timerStart ? '' : timerStart}</TimerStart>
        <TimerEnd>{!randomNum ? '' : `${(timerEnd / 100).toFixed(2)}X`}</TimerEnd>
      </Graph>
    </Wrapper>
  );
};
