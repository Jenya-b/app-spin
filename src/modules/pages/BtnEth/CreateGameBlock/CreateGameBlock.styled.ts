import styled, { css } from 'styled-components';

import { btnPlusIcon, chooseCoinIcon } from 'constants/images';
import { ButtonPrimary } from 'styles/components';
import {
  fontStyleSmallBold,
  fontStyleXSmallBemiBold,
  fontStyleXSmallBold,
  fontStyleXSmallNormal,
} from 'styles/typography';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 12.5rem 1fr 12.5rem;
  align-items: center;
  column-gap: 1.2rem;
`;

export const ChooseCoin = styled.div`
  position: relative;
  padding-top: 2rem;
  width: 6rem;
  text-align: center;
  ${fontStyleSmallBold}

  p:last-child {
    margin-top: 0.25rem;
    opacity: 0.25;
    ${fontStyleXSmallBemiBold}
  }

  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1.7rem;
    height: 1.7rem;
    background: url(${chooseCoinIcon}) no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const CoinInfo = styled.div`
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  height: 12rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ImgWrap = styled.div`
  width: 11rem;
  height: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transition: ${({ theme }) => theme.transition};
    width: 90%;

    :hover {
      width: 100%;
    }
  }
`;

export const Button = styled(ButtonPrimary)`
  width: 100%;
  height: 2.85rem;

  padding: 0px 0.85rem;

  ::after {
    background: url(${btnPlusIcon}) no-repeat;
    background-position: center;
    background-size: contain;
  }

  :hover {
    padding: 0px 1.25rem;

    ::after {
      right: 1.25rem;
    }
  }
`;

export const Lable = styled.label`
  position: relative;
  width: 100%;
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin-top: 0.6rem;
  padding-left: 0.85rem;
  width: 100%;
  height: 2.85rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.inputPrimary};
  ${fontStyleXSmallNormal}
`;

export const criptoListCss = css`
  margin-top: 0.85rem;
  display: flex;
  justify-content: space-between;
`;
