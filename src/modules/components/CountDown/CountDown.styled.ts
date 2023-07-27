import styled from 'styled-components';

import { btnRightIcon, criptoIcon } from 'constants/images';
import { fontStyleXXLargeBold, fontStyleSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  padding: 15px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const Timer = styled.div`
  margin-top: 4px;
  ${fontStyleXXLargeBold}
  font-variant-numeric: lining-nums proportional-nums;
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
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleSmallBold}

  div:nth-child(2) {
    position: relative;
    padding-right: 20px;

    ::after {
      position: absolute;
      content: '';
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      background: url(${criptoIcon.spin}) no-repeat;
      background-size: contain;
    }
  }

  div:nth-child(3) {
    width: 15px;
    height: 15px;
    background: url(${btnRightIcon}) no-repeat;
    background-size: contain;
    opacity: 0.25;
  }
`;
