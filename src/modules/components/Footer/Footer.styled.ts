import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';
import { shieldIcon } from 'constants/images';

export const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBtn = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  padding: 9px 10px 8px 26px;
  color: ${colors.green200};
  background: ${colors.green100};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.11px;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition};
  cursor: ${({ theme }) => theme.cursor};

  :hover {
    background: rgba(91, 201, 87, 0.25);
  }

  ::before {
    position: absolute;
    content: '';
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: url(${shieldIcon}) no-repeat;
    background-position: center;
  }
`;

export const menuListCss = css`
  display: flex;
  column-gap: 18px;
`;

export const StyledLink = styled(Link)`
  color: ${colors.whiteTransparent200};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.11px;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition};

  :hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
