import styled from 'styled-components';

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
`;
