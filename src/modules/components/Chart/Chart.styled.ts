import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { fontStyleLargeBold } from 'styles/typography';

export const Wrapper = styled(animated.div)`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  margin-bottom: 12px;
  padding: 2rem;
  overflow: hidden;
  position: relative;

  @media (max-width: 1200px) {
    padding: 1rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media (max-width: 1023px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }
`;

export const Timer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.5rem 1.8rem 1fr;

  p {
    ${fontStyleLargeBold}
    :nth-child(1) {
      justify-self: end;
    }
    :nth-child(2) {
      justify-self: center;
    }
  }
`;
