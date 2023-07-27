import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';
import { shieldIcon } from 'constants/images';
import { fontStyleXXLargeBold, fontStyleXXSmallBold, fontStyleXSmallBold } from 'styles/typography';

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
  ${fontStyleXXSmallBold}
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
  ${fontStyleXXSmallBold}
  letter-spacing: -0.11px;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition};

  :hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  max-width: 585px;
  width: 100%;
  background: ${({ theme }) => theme.colors.inputPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  ${fontStyleXXLargeBold}
  text-transform: uppercase;
`;

export const ModalSubtitle = styled.h3`
  padding: 0 15px;
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.75);
  ${fontStyleXSmallBold}
  line-height: normal;
`;

export const ModalCopyBlock = styled.h3`
  margin-top: 14px;
  height: 51px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
`;
