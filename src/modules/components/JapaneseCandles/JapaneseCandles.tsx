import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

import { Lines, Svg, Wrapper } from './JapaneseCandles.styled';
import { converterFontSize } from 'utils/converter';

const height = converterFontSize(window.innerWidth, 150);
const width = 977;
const marginRight = 30;
const minY = -10;
const maxY = 10;
const heightLine = 50;

const random = 50;

export const JapaneseCandles = () => {
  const [data, setData] = useState([minY, maxY]);
  const [timer, setTimer] = useState([0]);
  const [widthWrap, setWidthWrap] = useState<number>();
  const wrapRef = useRef<HTMLDivElement>(null);
  const gyRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
    const width = wrapRef?.current?.offsetWidth;

    if (width) setWidthWrap(width);
  }, [wrapRef.current]);

  useEffect(() => {
    const y = d3
      .scaleLinear()
      .domain(data)
      .range([height - 5, 5]);

    const yAxis = d3.axisLeft(y).ticks(4);

    d3.select(gyRef.current)
      .transition()
      .duration(1500)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .call(yAxis as any);
  }, [data]);

  useEffect(() => {
    if (!timer.length || !widthWrap) return;

    const num = timer[0];

    if (num < 0 && data[0] >= num) {
      setData((state) => [num, state[state.length - 1] - 1]);
    } else if (num >= data[data.length - 1]) {
      setData((state) => [state[0] + 1, num]);
    }

    d3.select(linesRef.current)
      .selectAll('div')
      .data(timer)
      .join(
        (enter) =>
          enter
            .append('div')
            .style('transform', function () {
              return `translate(${widthWrap + marginRight}px,${height / 2 - heightLine}px)`;
            })
            .classed('future-line', true),
        (update) =>
          update
            .transition()
            .easeVarying(() => d3.easePolyIn.exponent(1))
            .style('transform', function (d) {
              return `translate(${widthWrap - marginRight - Math.abs(d) * 30}px,${
                height / 2 - heightLine
              }px)`;
            })
            .duration(1000)
      );
  }, [timer]);

  useEffect(() => {
    const timer = setInterval(handleClick, 1000);
    return () => clearInterval(timer);
  }, [timer]);

  const handleClick = () => {
    if (random > 0 && timer[0] < random) {
      setTimer((state) => [state.length, ...state]);
    } else if (random < 0 && timer[0] > random) {
      setTimer((state) => [state.length * -1, ...state]);
    }
  };

  return (
    <Wrapper ref={wrapRef}>
      <Svg width={widthWrap} height={height}>
        <g ref={gyRef} transform={`translate(${widthWrap}, 0)`}></g>
      </Svg>
      <Lines ref={linesRef} />
    </Wrapper>
  );
};
