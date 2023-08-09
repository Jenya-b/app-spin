import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';
import {
  fontStyleSmallDemiBold,
  fontStyleSmallNormal,
  fontStyleXSmallBold,
  fontStyleXXSmallNormal,
} from 'styles/typography';

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
  border-radius: 8px;
  overflow: auto;
  display: flex;
  flex-direction: column;

  li {
    padding: 0.6rem 0.7rem;

    :nth-child(odd) {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);
    }
  }
`;
