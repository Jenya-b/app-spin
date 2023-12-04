import styled, { css } from 'styled-components';

import {
  fontStyleSmallDemiBold,
  fontStyleXSmallBold,
  fontStyleXSmallNormal,
  fontStyleXXSmallBold,
} from 'styles/typography';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  width: auto;

  @media (max-width: 1200px) {
    padding: 0;
    border-radius: none;
    background: none;
    grid-row: 2/3;
    grid-column: 1/2;
  }

  @media (max-width: 767px) {
    grid-row: 3/4;
    grid-column: 1/3;
  }
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

  @media (max-width: 767px) {
    grid-template: repeat(2, auto) / repeat(2, 1fr);
    row-gap: 0.72rem;
  }
`;

export const Lable = styled.label`
  position: relative;
  width: 5rem;
  ${fontStyleXSmallBold}
  text-transform: uppercase;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  margin-top: 0.6rem;
  width: 100%;
  height: 2.85rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
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
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleSmallDemiBold}
  align-self: flex-end;
  text-transform: uppercase;

  :disabled {
    background: #6a6a6a;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    grid-column: 1/3;
  }
`;

export const criptoListCss = css`
  margin-top: 0.5rem;
  grid-column: 1/4;
  display: flex;
  justify-content: space-between;
`;
