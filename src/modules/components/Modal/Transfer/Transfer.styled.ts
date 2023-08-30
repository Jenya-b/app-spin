import styled from 'styled-components';
import { animated } from '@react-spring/web';

import { colors } from 'styles/colors';
import { Wrapper } from '../Modal.styled';
import { ButtonPrimary } from 'styles/components';
import { recieveIcon, sendIcon } from 'constants/images';
import {
  fontStyleLargeNormal,
  fontStyleSmallDemiBold,
  fontStyleXXSmallBold,
} from 'styles/typography';

interface PraceProps {
  active: boolean;
}

export const StyledWrapp = styled(Wrapper)`
  max-width: 37.85rem;
  width: 100%;
  overflow: auto;
`;

export const PriceWrap = styled.div`
  margin-top: 1.3rem;
  display: flex;
  column-gap: 1.3rem;

  @media (max-width: 479px) {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 0.8rem;
  }
`;

export const Price = styled.div<PraceProps>`
  width: 7.8rem;
  padding: 1.3rem 0 1.3rem 1.3rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: ${({ active }) => (active ? `${colors.blueLight100}` : `${colors.blue600}`)};
  cursor: ${({ theme }) => theme.cursor};

  @media (max-width: 479px) {
    width: 100%;
  }
`;

export const CriptoName = styled.div`
  position: relative;
  ${fontStyleSmallDemiBold}
  text-transform: uppercase;
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
`;

export const Icon = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const InfoText = styled.div`
  margin-top: 0.6rem;
  opacity: 0.5;
  ${fontStyleXXSmallBold}
  text-transform: uppercase;
`;

export const Count = styled.div`
  margin-top: 0.3rem;
  ${fontStyleLargeNormal}
`;

export const Controls = styled.div`
  margin-top: 1.3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.3rem;

  @media (max-width: 479px) {
    margin-top: 0.8rem;
    grid-template: repeat(2, 1fr) / 1fr;
    column-gap: 0rem;
    row-gap: 0.8rem;
  }
`;

interface ButtonProps {
  isactive: boolean;
}

export const SendBtn = styled(ButtonPrimary)<ButtonProps>`
  height: 3.57rem;
  padding: 0px 0.85rem;
  background: ${({ isactive }) => (isactive ? `${colors.blueLight100}` : `${colors.blue600}`)};

  ::after {
    background: url(${sendIcon}) no-repeat;
    background-size: contain;
    background-position: center;
    height: 1.25rem;
    width: 1.25rem;
  }

  :hover {
    padding: 0px 1.25rem;

    ::after {
      right: 1.25rem;
    }
  }
`;

export const RecieveBtn = styled(ButtonPrimary)<ButtonProps>`
  height: 3.57rem;
  padding: 0px 0.85rem;
  background: ${({ isactive }) => (isactive ? `${colors.blueLight100}` : `${colors.blue600}`)};

  ::after {
    background: url(${recieveIcon}) no-repeat;
    background-size: contain;
    background-position: center;
    height: 1.25rem;
    width: 1.25rem;
  }

  :hover {
    padding: 0px 1.25rem;

    ::after {
      right: 1.25rem;
    }
  }
`;

export const TransactionBlock = styled(animated.div)`
  margin-top: 0px;
  height: 0px;
  opacity: 0;
  overflow: hidden;
`;
