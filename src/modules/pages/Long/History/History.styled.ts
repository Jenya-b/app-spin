import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 16px;
  overflow: auto;
`;

export const HistoryBlock = styled.div`
  padding: 12px 0 12px 16px;
  border-radius: 16px;
  background: #1d1d2c;
  overflow: hidden;
`;

export const Title = styled.h3`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;

export const HistoryList = styled.div`
  margin-top: 8px;
  display: flex;
  column-gap: 6px;
  color: #5bc957;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.11px;
  text-transform: uppercase;
`;

export const HistoryItem = styled.div`
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(91, 201, 87, 0.15);
`;

export const Table = styled.div`
  margin-top: 16px;
  border-radius: 16px;
  overflow: hidden;
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
`;

export const UserLogo = styled.img`
  width: 32px;
  height: 32px;
  padding: 3px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const UserName = styled.div`
  padding-left: 10px;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Params = styled.div`
  padding-left: 33px;
  display: flex;
  flex-direction: column;

  span {
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Raleway;
    font-size: 7px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;

    :last-child {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;

export const Result = styled.div`
  margin-left: auto;
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(91, 201, 87, 0.15);
  color: #5bc957;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.11px;
  text-transform: uppercase;
`;

export const historyListCss = css`
  display: flex;
  flex-direction: column;

  li {
    padding: 4px 6px;

    :nth-child(odd) {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);
    }
  }
`;
