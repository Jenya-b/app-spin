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
  fontStyleXSmallBold,
} from 'styles/typography';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.7rem;
  width: 26.4rem;
  background: ${({ theme }) => theme.colors.inputPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  overflow: auto;

  @media (max-width: 479px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
    border-radius: 0;
  }
`;

export const Title = styled.h2`
  ${fontStyleXXLargeBold}
  text-transform: uppercase;
  text-align: center;
`;

export const Subtitle = styled.h3`
  margin-top: 0.5rem;
  opacity: 0.75;
  ${fontStyleSmallBold}
  text-transform: uppercase;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 1.15rem;
  margin-bottom: 1.43rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.43rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding-left: 0.72rem;
  margin-top: 0.6rem;
  height: 3.64rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleSmallDemiBold}
`;

export const OtherAuth = styled(Link)`
  position: relative;
  margin-top: 3.43rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::before {
    position: absolute;
    content: 'or';
    top: -1.75rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 0.5rem;
    background: ${({ theme }) => theme.colors.inputPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    ${fontStyleXXSmallBold}
    text-transform: uppercase;
    z-index: 2;
  }

  ::after {
    position: absolute;
    content: '';
    top: -1.48rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${colors.grey100};
    z-index: 1;
  }
`;

export const OtherSubtitle = styled.p`
  padding-top: 2.14rem;
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
    width: 1.7rem;
    height: 1.7rem;
  }
`;

export const OtherTitle = styled.p`
  margin-top: 1px;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleLargeBold}
`;
