import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';
import {
  fontStyleSmallBold,
  fontStyleSmallDemiBold,
  fontStyleSmallNormal,
  fontStyleXSmallBold,
  fontStyleXXSmallNormal,
} from 'styles/typography';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 1.5rem 2rem;
  overflow: auto;
`;

export const HistoryBlock = styled.div`
  padding: 0.85rem 0 0.85rem 1.15rem;
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  overflow: hidden;
`;

export const Title = styled.h3`
  ${fontStyleSmallBold}
  text-transform: uppercase;
`;

export const HistoryList = styled.div`
  margin-top: 0.6rem;
  display: flex;
  column-gap: 0.4rem;
  color: ${colors.green200};
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;

export const HistoryItem = styled.div`
  padding: 0.5rem 0.8rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: rgba(91, 201, 87, 0.15);
`;

export const Table = styled.div`
  margin-top: 1.15rem;
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  overflow: hidden;
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
`;

export const UserLogo = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  padding: 0.21rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const UserName = styled.div`
  padding-left: 0.72rem;
  ${fontStyleSmallNormal}
`;

export const Params = styled.div`
  padding-left: 2.36rem;
  display: flex;
  flex-direction: column;

  span {
    ${fontStyleXXSmallNormal}
    text-transform: uppercase;

    :last-child {
      margin-top: 0.21rem;
      ${fontStyleSmallDemiBold}
    }
  }
`;

export const Result = styled.div`
  margin-left: auto;
  padding: 0.4rem 0.72rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: rgba(91, 201, 87, 0.15);
  color: ${colors.green200};
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;

export const historyListCss = css`
  display: flex;
  flex-direction: column;

  li {
    padding: 0.6rem 0.7rem;

    :nth-child(odd) {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);
    }
  }
`;
