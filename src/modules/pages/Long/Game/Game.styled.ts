import styled from 'styled-components';

import { forwardIcon } from 'constants/images';
import {
  fontStyleMediumBold,
  fontStyleSmallBold,
  fontStyleSmallDemiBold,
  fontStyleXSmallBemiBold,
  fontStyleXSmallBold,
  fontStyleXSmallNormal,
  fontStyleXXSmallBold,
} from 'styles/typography';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
`;

export const GameBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  width: auto;
`;

export const InGameTitle = styled.div`
  ${fontStyleSmallBold}
`;

export const InGameList = styled.div`
  margin-top: 0.72rem;
  display: flex;
  column-gap: 0.72rem;
  justify-content: space-between;

  img {
    width: 1.43rem;
    height: 1.43rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const InGameInfoText = styled.div`
  margin-top: 0.6rem;
  ${fontStyleXSmallNormal}
  text-transform: uppercase;
`;

export const InGameCount = styled.div`
  ${fontStyleXSmallBemiBold}
  text-transform: uppercase;
`;

export const Form = styled.form`
  margin-top: 0.4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.72rem;

  label:nth-child(2) {
    input {
      padding-left: 0.85rem;
    }

    &::before {
      position: absolute;
      content: 'x';
      bottom: 0.96rem;
      left: 1.6rem;
      color: ${({ theme }) => theme.colors.textPrimary};
      ${fontStyleXXSmallBold}
      text-transform: uppercase;
      z-index: 10;
    }
  }
`;

export const Lable = styled.label`
  position: relative;
  width: 5rem;
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin-top: 0.6rem;
  width: 100%;
  height: 2.85rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.inputPrimary};
  ${fontStyleXSmallNormal}
  text-align: center;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  height: 2.85rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleSmallDemiBold}
  align-self: flex-end;
  text-transform: uppercase;
`;

export const TransferBlock = styled.div`
  display: flex;
  column-gap: 1.7rem;
  align-items: center;
`;

export const TransferWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.15rem;
`;

export const TransferCount = styled.div`
  ${fontStyleMediumBold}
  text-transform: uppercase;
`;

export const TransferInfo = styled.div`
  color: rgba(255, 255, 255, 0.5);
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;

export const Icon = styled.div`
  background: url(${forwardIcon}) no-repeat;
  background-position: center;
  background-size: contain;
  width: 1.7rem;
  height: 1.7rem;
`;
