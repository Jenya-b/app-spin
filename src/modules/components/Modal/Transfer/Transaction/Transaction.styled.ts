import styled from 'styled-components';

import { btnRightIcon } from 'constants/images';
import { ButtonPrimary } from 'styles/components';
import {
  fontStyleLargeNormal,
  fontStyleSmallDemiBold,
  fontStyleXXSmallBold,
} from 'styles/typography';

export const Form = styled.form``;

export const InputBlock = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / 2fr 1.5fr 5.5rem;
  row-gap: 1.7rem;
  column-gap: 1.3rem;
`;

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
  ${fontStyleXXSmallBold}
  text-transform: uppercase;

  &:nth-child(1) {
    grid-column: 1/4;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.6rem;
  padding-left: 0.85rem;
  height: 3.57rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  ${fontStyleSmallDemiBold}
  color: ${({ theme }) => theme.colors.textPrimary};

  :disabled {
    background: none;
    border: none;
    padding: 0;

    ::placeholder {
      color: ${({ theme }) => theme.colors.textPrimary};
      ${fontStyleLargeNormal}
    }
  }
`;

export const TransactionBtn = styled(ButtonPrimary)`
  margin-top: 1.7rem;
  width: 100%;
  height: 3.57rem;

  padding: 0px 0.85rem;

  ::after {
    background: url(${btnRightIcon}) no-repeat;
  }

  :hover {
    padding: 0px 1.25rem;

    ::after {
      right: 1.25rem;
    }
  }
`;
