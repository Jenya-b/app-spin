import styled from 'styled-components';

import { colors } from 'styles/colors';
import { shieldIcon } from 'constants/images';
import { fontStyleXXSmallBold } from 'styles/typography';

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
