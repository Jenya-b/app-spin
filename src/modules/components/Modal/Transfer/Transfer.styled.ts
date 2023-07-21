import styled from 'styled-components';
import { animated } from '@react-spring/web';

import { colors } from 'styles/colors';
import { Wrapper } from '../Modal.styled';
import { ButtonPrimary } from 'styles/components';
import { recieveIcon, sendIcon } from 'constants/images';

interface PraceProps {
  active: boolean;
}

export const StyledWrapp = styled(Wrapper)`
  max-width: 530px;
  width: 100%;
`;

export const PriceWrap = styled.div`
  margin-top: 18px;
  display: flex;
  column-gap: 18px;
`;

export const Price = styled.div<PraceProps>`
  width: 109px;
  padding: 18px 0 18px 18px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: ${({ active }) => (active ? `${colors.blueLight100}` : `${colors.blue600}`)};
  cursor: ${({ theme }) => theme.cursor};
`;

export const CriptoName = styled.div`
  position: relative;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.132px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const InfoText = styled.div`
  margin-top: 8px;
  opacity: 0.5;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.11px;
  text-transform: uppercase;
`;

export const Count = styled.div`
  margin-top: 4px;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.198px;
`;

export const Controls = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 18px;
  height: 50px;
`;

interface ButtonProps {
  isactive: boolean;
}

export const SendBtn = styled(ButtonPrimary)<ButtonProps>`
  padding: 0px 12px;
  background: ${({ isactive }) => (isactive ? `${colors.blueLight100}` : `${colors.blue600}`)};

  ::after {
    background: url(${sendIcon}) no-repeat;
    background-size: contain;
    height: 17px;
    width: 17px;
  }

  :hover {
    padding: 0px 17px;

    ::after {
      right: 17px;
    }
  }
`;

export const RecieveBtn = styled(ButtonPrimary)`
  padding: 0px 12px;
  background: ${colors.blue600};

  ::after {
    background: url(${recieveIcon}) no-repeat;
    background-size: contain;
    height: 17px;
    width: 17px;
  }

  :hover {
    padding: 0px 17px;

    ::after {
      right: 17px;
    }
  }
`;

export const TransactionBlock = styled(animated.div)`
  margin-top: 0px;
  height: 0px;
  opacity: 0;
  overflow: hidden;
`;
