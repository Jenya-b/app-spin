import { btnRightIcon, criptoIcon } from 'constants/images';
import styled from 'styled-components';

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
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  font-variant-numeric: lining-nums proportional-nums;
  line-height: normal;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

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
