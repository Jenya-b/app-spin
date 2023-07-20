import { Suspense, useCallback, useRef, useState } from 'react';
import { useSpring } from '@react-spring/web';
import { Outlet } from 'react-router-dom';

import { Wrapper, Chart, Sidebar } from './Layout.styled';
import { Header } from '../Header/Header';
import { Chat } from '../Chat/Chat';
import { Footer } from '../Footer/Footer';
import { CountDown } from '../CountDown/CountDown';
import { Loader } from '../Loader/Loader';
import { Wallet } from '../Wallet/Wallet';
import { wallet } from 'data/wallet';

export const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  const springs = useSpring({
    immediate: !chartRef.current,
    from: { height: '170px', opacity: 1, marginBottom: '12px', borderWidth: '1px' },
    to: { height: '0px', opacity: 0, marginBottom: '0px', borderWidth: '0px' },
    reverse: !isVisible,
    reset: true,
    config: { duration: 500 },
  });

  const showChart = useCallback(() => setIsVisible(true), []);

  const hideChart = useCallback(() => setIsVisible(false), []);

  return (
    <Wrapper>
      <Header hideChart={hideChart} showChart={showChart} />
      <Sidebar>
        <Chart ref={chartRef} style={{ ...springs }} />
        <Wallet activeBlock={isVisible} data={wallet} />
      </Sidebar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Chat />
      <CountDown days={1} hours={0} minutes={1} seconds={15} />
      <Footer />
    </Wrapper>
  );
};
