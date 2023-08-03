import { Suspense, useCallback, useRef, useState } from 'react';
import { useSpring } from '@react-spring/web';
import { Outlet, useLocation } from 'react-router-dom';

import { Wrapper, Sidebar } from './Layout.styled';
import { Header } from '../Header/Header';
import { Chat } from '../Chat/Chat';
import { Footer } from '../Footer/Footer';
import { CountDown } from '../CountDown/CountDown';
import { Loader } from '../Loader/Loader';
import { Wallet } from '../Wallet/Wallet';
import { wallet } from 'data/wallet';
import { chatData } from 'data/chat';
import { Chart } from '../Chart/Chart';

export const Layout = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(pathname !== '/');
  const chartRef = useRef(null);

  const springs = useSpring({
    immediate: !chartRef.current,
    from: {
      height: '170px',
      opacity: 1,
      marginBottom: '12px',
      borderWidth: '1px',
      padding: '16px',
    },
    to: { height: '0px', opacity: 0, marginBottom: '0px', borderWidth: '0px', padding: '0px' },
    reverse: !isVisible,
    config: { duration: 500 },
  });

  const showChart = useCallback(() => setIsVisible(true), []);

  const hideChart = useCallback(() => setIsVisible(false), []);

  return (
    <Wrapper>
      <Header hideChart={hideChart} showChart={showChart} />
      <Sidebar>
        <Chart chartRef={chartRef} style={springs} />
        <Wallet activeBlock={isVisible} data={wallet} />
      </Sidebar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Chat chatData={chatData} />
      <CountDown days={1} hours={0} minutes={1} seconds={15} />
      <Footer />
    </Wrapper>
  );
};
