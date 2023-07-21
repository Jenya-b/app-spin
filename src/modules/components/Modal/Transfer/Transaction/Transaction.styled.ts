import styled from 'styled-components';

import { btnRightIcon } from 'constants/images';
import { ButtonPrimary } from 'styles/components';

export const Form = styled.form``;

export const InputBlock = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / 2fr 1.5fr 65px;
  row-gap: 24px;
  column-gap: 18px;
`;

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.11px;
  text-transform: uppercase;

  &:nth-child(1) {
    grid-column: 1/4;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-top: 8px;
  padding-left: 12px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.154px;
  color: ${({ theme }) => theme.colors.textPrimary};

  :disabled {
    background: none;
    border: none;
    padding: 0;

    ::placeholder {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.198px;
    }
  }
`;

export const TransactionBtn = styled(ButtonPrimary)`
  margin-top: 24px;
  width: 100%;
  height: 50px;

  padding: 0px 12px;

  ::after {
    background: url(${btnRightIcon}) no-repeat;
  }

  :hover {
    padding: 0px 17px;

    ::after {
      right: 17px;
    }
  }
`;
