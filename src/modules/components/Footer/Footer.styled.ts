import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';
import { shieldIcon } from 'constants/images';
import { fontStyleXXLargeBold, fontStyleXXSmallBold, fontStyleXSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBtn = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  padding: 0.8rem 0.8rem 0.7rem 1.85rem;
  color: ${colors.green200};
  background: ${colors.green100};
  ${fontStyleXXSmallBold}
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition};
  cursor: ${({ theme }) => theme.cursor};

  :hover {
    background: rgba(91, 201, 87, 0.25);
  }

  ::before {
    position: absolute;
    content: '';
    left: 0.72rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.85rem;
    height: 0.85rem;
    background: url(${shieldIcon}) no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.7rem;
  max-width: 42rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.inputPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  ${fontStyleXXLargeBold}
  text-transform: uppercase;
`;

export const ModalSubtitle = styled.h3`
  padding: 0 2rem;
  margin-top: 0.4rem;
  color: rgba(255, 255, 255, 0.75);
  ${fontStyleXSmallBold}
  line-height: normal;
  text-align: center;
`;

export const ModalCopyBlock = styled.h3`
  margin-top: 1rem;
  height: 3.6rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
`;
