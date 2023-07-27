import styled from 'styled-components';

import { infoIcon, inputBtnIcon, messageChatIcon } from 'constants/images';
import {
  fontStyleMediumBold,
  fontStyleSmallDemiBold,
  fontStyleXXSmallBold,
} from 'styles/typography';

export const Wrapper = styled.div`
  grid-column: 3/4;
  grid-row: 2/4;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template: 52px 1fr 80px / 1fr;
`;

export const TitleBlock = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  position: relative;
  padding-left: 22px;
  ${fontStyleMediumBold}

  ::before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background: url(${messageChatIcon}) no-repeat;
    background-position: center;
  }
`;

export const Info = styled.div`
  position: relative;
  padding: 5px 10px 4px 26px;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  ${fontStyleXXSmallBold}
  letter-spacing: -0.11px;
  text-transform: uppercase;

  ::before {
    position: absolute;
    content: '';
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background: url(${infoIcon}) no-repeat;
    background-position: center;
  }
`;

export const MessageBlock = styled.div`
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
`;

export const ControlBlock = styled.div`
  margin-top: 3px;
  padding: 0 17px;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  height: 40px;
`;

export const Input = styled.input`
  padding-left: 12px;
  padding-right: 40px;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  background: ${({ theme }) => theme.colors.inputPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Raleway', sans-serif;
  ${fontStyleSmallDemiBold}
  letter-spacing: -0.11px;
`;

export const InputBtn = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: url(${inputBtnIcon}) no-repeat;
  background-position: center;
`;
