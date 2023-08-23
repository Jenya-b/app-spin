import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { lineIcon } from 'constants/images';
import { fontStyleLargeBold, fontStyleXSmallBold } from 'styles/typography';

export const Wrapper = styled(animated.div)`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  margin-bottom: 12px;
  padding: 2rem;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 1rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const Graph = styled.div`
  height: 100%;
  position: relative;
  ${fontStyleXSmallBold}
`;

export const Lines = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;

  .line {
    position: absolute;
    width: 100%;

    ::after {
      position: absolute;
      content: '';
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      height: 0.4rem;
      width: 90%;
      background: url(${lineIcon}) no-repeat;
      background-size: cover;
      background-position: 100%;
    }
  }
`;

export const Svg = styled.svg`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
`;

export const TimerStart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f7d085;
  display: flex;
  ${fontStyleLargeBold}
`;

export const TimerEnd = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  ${fontStyleLargeBold}
`;
