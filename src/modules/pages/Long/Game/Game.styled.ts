import styled from 'styled-components';

import { forwardIcon } from 'constants/images';
import {
  fontStyleMediumBold,
  fontStyleSmallDemiBold,
  fontStyleXSmallBemiBold,
  fontStyleXSmallBold,
  fontStyleXXSmallBold,
  fontStyleXXSmallNormal,
} from 'styles/typography';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const GameBlock = styled.div`
  height: 100%;
  display: inline-block;
  padding: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  width: auto;
`;

export const InGameTitle = styled.div`
  ${fontStyleXSmallBold}
`;

export const InGameList = styled.div`
  margin-top: 10px;
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
`;

export const InGameInfoText = styled.div`
  margin-top: 9px;
  ${fontStyleXXSmallNormal}
  text-transform: uppercase;
`;

export const InGameCount = styled.div`
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleXSmallBemiBold}
  text-transform: uppercase;
`;

export const Form = styled.form`
  margin-top: 6px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;

  label:nth-child(2) {
    input {
      padding-left: 12px;
    }

    &::before {
      position: absolute;
      content: 'x';
      bottom: 13.5px;
      left: 22px;
      color: ${({ theme }) => theme.colors.textPrimary};
      ${fontStyleXXSmallBold}
      text-transform: uppercase;
      z-index: 10;
    }
  }
`;

export const Lable = styled.label`
  position: relative;
  width: 70px;
  ${fontStyleXXSmallBold}
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  font-variant-numeric: lining-nums proportional-nums;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.inputPrimary};
  text-align: center;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleSmallDemiBold}
  align-self: flex-end;
`;

export const TransferBlock = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: center;
`;

export const TransferWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2px;
`;

export const TransferCount = styled.div`
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleMediumBold}
  text-transform: uppercase;
`;

export const TransferInfo = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleXXSmallBold}
  text-transform: uppercase;
`;

export const Icon = styled.div`
  background: url(${forwardIcon}) no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
`;
