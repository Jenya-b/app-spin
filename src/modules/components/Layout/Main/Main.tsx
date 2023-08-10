import { Suspense, useCallback, useRef, useState } from 'react';
import { useSpring } from '@react-spring/web';
import { Outlet, useLocation } from 'react-router-dom';

import { Wrapper, Sidebar } from './Main.styled';
import { Header } from 'modules/components/Header/Header';
import { Chat } from 'modules/components/Chat/Chat';
import { Footer } from 'modules/components/Footer/Footer';
import { CountDown } from 'modules/components/CountDown/CountDown';
import { Loader } from 'modules/components/Loader/Loader';
import { Wallet } from 'modules/components/Wallet/Wallet';
import { wallet } from 'data/wallet';
import { chatData } from 'data/chat';
import { Chart } from 'modules/components/Chart/Chart';
import { converterFontSize } from 'utils/converter';

export const LayoutMain = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(pathname !== '/');
  const chartRef = useRef(null);

  const springs = useSpring({
    immediate: !chartRef.current,
    from: {
      height: `${converterFontSize(window.innerWidth, 193)}px`,
      opacity: 1,
      marginBottom: `${converterFontSize(window.innerWidth, 12)}px`,
      borderWidth: `${converterFontSize(window.innerWidth, 1)}px`,
      padding: `${converterFontSize(window.innerWidth, 28)}px`,
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
