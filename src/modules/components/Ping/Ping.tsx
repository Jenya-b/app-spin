import { createArray } from 'utils/createArray';
import { Info, Signal, Wrapper } from './Ping.styled';

export const Ping = () => (
  <Wrapper>
    <Signal>
      {createArray(3).map((_, i) => (
        <span key={i} />
      ))}
    </Signal>
    <Info>
      <p>3 240</p>
      <p>PING: 112</p>
    </Info>
  </Wrapper>
);
