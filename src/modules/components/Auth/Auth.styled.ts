import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { metamaskIcon } from 'constants/images';
import { colors } from 'styles/colors';
import {
  fontStyleXXLargeBold,
  fontStyleSmallBold,
  fontStyleXXSmallBold,
  fontStyleSmallDemiBold,
  fontStyleXXSmallDemiBold,
  fontStyleLargeBold,
} from 'styles/typography';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 25px;
  max-width: 370px;
  width: 100%;
  background: ${({ theme }) => theme.colors.inputPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
`;

export const Title = styled.h2`
  ${fontStyleXXLargeBold}
  text-transform: uppercase;
  text-align: center;
`;

export const Subtitle = styled.h3`
  margin-top: 6px;
  opacity: 0.75;
  ${fontStyleSmallBold}
  text-transform: uppercase;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 16px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  ${fontStyleXXSmallBold}
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding-left: 10px;
  margin-top: 8px;
  height: 51px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleSmallDemiBold}
`;

export const OtherAuth = styled(Link)`
  position: relative;
  margin-top: 48px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::before {
    position: absolute;
    content: 'or';
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 6px;
    background: ${({ theme }) => theme.colors.inputPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    ${fontStyleXXSmallBold}
    text-transform: uppercase;
    z-index: 2;
  }

  ::after {
    position: absolute;
    content: '';
    top: -20px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${colors.grey100};
    z-index: 1;
  }
`;

export const OtherSubtitle = styled.p`
  padding-top: 30px;
  position: relative;
  color: ${colors.whiteTransparent200};
  ${fontStyleXXSmallDemiBold}

  ::before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    background: url(${metamaskIcon}) no-repeat;
    background-size: contain;
    width: 24px;
    height: 24px;
  }
`;

export const OtherTitle = styled.p`
  margin-top: 1px;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleLargeBold}
`;
