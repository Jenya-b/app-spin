import { Suspense, useRef, useState, useEffect } from 'react';
import { useSpring } from '@react-spring/web';
import { Outlet, useLocation } from 'react-router-dom';

import { Wrapper, Sidebar, ChatWrap } from './Main.styled';
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
import { useResize } from 'hooks/useResize';
import { path } from 'modules/router/path';
import { Chart2 } from 'modules/components/Chart2/Chart2';

export const LayoutMain = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(pathname !== '/');
  const chartRef = useRef(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [windowWidth] = useResize();

  const springs = useSpring({
    immediate: !chartRef.current,
    from: {
      height: `${converterFontSize(
        window.innerWidth,
        window.innerWidth >= 1024 ? 193 : window.innerWidth / 2
      )}px`,
      opacity: 1,
      marginBottom: `${converterFontSize(window.innerWidth, 12)}px`,
      borderWidth: `${converterFontSize(window.innerWidth, 1)}px`,
      padding: `${converterFontSize(window.innerWidth, window.innerWidth > 1200 ? 28 : 14)}px`,
    },
    to: { height: '0px', opacity: 0, marginBottom: '0px', borderWidth: '0px', padding: '0px' },
    reverse: !isVisible,
    config: { duration: 500 },
  });

  useEffect(() => {
    pathname !== path.home ? setIsVisible(true) : setIsVisible(false);
  }, [pathname]);

  return (
    <Wrapper>
      <Header />
      <Sidebar>
        <Chart2 chartRef={chartRef} style={springs} />
        {windowWidth > 1023 && <Wallet activeBlock={isVisible} data={wallet} />}
      </Sidebar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {windowWidth > 1023 && (
        <ChatWrap ref={chatRef}>
          <Chat chatData={chatData} />
        </ChatWrap>
      )}
      {windowWidth > 1023 ? (
        <CountDown days={1} hours={0} minutes={1} seconds={15} />
      ) : (
        pathname !== path.messages &&
        pathname !== path.setting && <CountDown days={1} hours={0} minutes={1} seconds={15} />
      )}
      {windowWidth > 1023 && <Footer />}
    </Wrapper>
  );
};
