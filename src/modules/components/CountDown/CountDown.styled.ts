import styled from 'styled-components';

import { arrowRightIcon, btnRightIcon, cryptoIcon, presentIcon } from 'constants/images';
import { fontStyleXXLargeBold, fontStyleSmallBold } from 'styles/typography';
import { mainMediaPadding } from 'styles/fragments';
import { colors } from 'styles/colors';

export const Wrapper = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};

  ${mainMediaPadding}

  @media (max-width: 1200px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media (max-width: 1023px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 479px) {
    position: relative;
    grid-template-columns: 1.5fr 1fr auto;
    align-items: center;

    ::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      width: 2rem;
      height: 2rem;
      background: url(${presentIcon}) no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
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

  @media (max-width: 479px) {
    color: ${colors.green200};
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  ${fontStyleSmallBold}

  @media (max-width: 1023px) {
    justify-content: start;
    align-items: center;
    column-gap: 2.5rem;
  }

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: start;
    padding-left: 3rem;
  }

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

      @media (max-width: 479px) {
        display: none;
      }
    }
  }

  div:nth-child(3) {
    width: 1.15rem;
    height: 1.15rem;
    background: url(${btnRightIcon}) no-repeat;
    background-size: contain;
    opacity: 0.25;

    @media (max-width: 479px) {
      display: none;
    }
  }
`;

export const Button = styled.button`
  margin-left: 1rem;
  display: none;
  width: 2.14rem;
  height: 2.14rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: rgba(91, 201, 87, 0.15);

  @media (max-width: 479px) {
    display: block;
    position: relative;

    ::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.2rem;
      height: 1.2rem;
      background: url(${arrowRightIcon}) no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
`;
