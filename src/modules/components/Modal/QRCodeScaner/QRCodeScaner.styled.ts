import styled from 'styled-components';

import { btnRightIcon } from 'constants/images';
import { ButtonPrimary } from 'styles/components';
import { QRCodeSVG } from 'qrcode.react';
import { colors } from 'styles/colors';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.7rem;
  max-width: 30rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.inputPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
`;

export const InputsWrap = styled.div`
  margin-top: 1.6rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1.25rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.6rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
`;

export const Button = styled(ButtonPrimary)`
  margin-top: 1.6rem;
  width: 100%;
  height: 3.6rem;
  padding: 0.93rem 0.85rem;

  ::after {
    background: url(${btnRightIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }

  :hover {
    padding: 0.93rem 1.21rem;

    ::after {
      right: 1.21rem;
    }
  }
`;

export const QRCodeWrap = styled.div`
  margin-top: 1.42rem;
  margin-bottom: 1.42rem;
  display: flex;
  justify-content: center;
`;

export const StyledQRCodeSVG = styled(QRCodeSVG)`
  width: 16rem;
  height: 16rem;

  path:nth-child(1) {
    fill: none;
  }
  path:nth-child(2) {
    fill: ${colors.blueLight100};
  }
`;
