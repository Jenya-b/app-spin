import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { lineIcon } from 'constants/images';
import { fontStyleLargeBold, fontStyleXXSmallBold } from 'styles/typography';

export const Wrapper = styled(animated.div)`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  margin-bottom: 12px;
  padding: 16px;
  overflow: hidden;
`;

export const Graph = styled.div`
  height: 100%;
  position: relative;
  ${fontStyleXXSmallBold}
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
      height: 4px;
      width: 90%;
      background: url(${lineIcon}) no-repeat;
      background-size: cover;
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
