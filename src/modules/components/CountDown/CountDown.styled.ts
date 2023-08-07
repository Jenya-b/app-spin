import styled from 'styled-components';

import { btnRightIcon, cryptoIcon } from 'constants/images';
import { fontStyleXXLargeBold, fontStyleSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const Timer = styled.div`
  margin-top: 0.3rem;
  ${fontStyleXXLargeBold}
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;

  span:nth-child(even) {
    opacity: 0.25;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  ${fontStyleSmallBold}

  div:nth-child(2) {
    position: relative;
    padding-right: 1.43rem;

    ::after {
      position: absolute;
      content: '';
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 1.15rem;
      height: 1.15rem;
      background: url(${cryptoIcon.spin}) no-repeat;
      background-size: contain;
    }
  }

  div:nth-child(3) {
    width: 1.15rem;
    height: 1.15rem;
    background: url(${btnRightIcon}) no-repeat;
    background-size: contain;
    opacity: 0.25;
  }
`;
